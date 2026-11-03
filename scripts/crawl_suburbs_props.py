import asyncio
import os
import json
import re
import time
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

SITEMAP_PATH = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled\10_sitemap.xml"
OUT_DIR = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled"

async def run_crawler():
    os.makedirs(OUT_DIR, exist_ok=True)

    with open(SITEMAP_PATH, 'r', encoding='utf-8') as f:
        xml = f.read()
    urls = re.findall(r'<loc>(.*?)</loc>', xml)

    # Get all suburb report URLs (unique slugs)
    suburb_urls = [u for u in urls if 'suburb-reports' in u or 'suburb-reports-lite' in u]
    property_urls = [u for u in urls if 'property-reports' in u or 'property-reports-lite' in u]

    seen_slugs = set()
    unique_suburbs = []
    for u in suburb_urls:
        slug = u.split('/')[-1]
        if slug not in seen_slugs:
            seen_slugs.add(slug)
            unique_suburbs.append(u)

    seen_prop_slugs = set()
    unique_props = []
    for u in property_urls:
        slug = u.split('/')[-1]
        if slug not in seen_prop_slugs:
            seen_prop_slugs.add(slug)
            unique_props.append(u)

    print(f"[*] Total unique suburbs: {len(unique_suburbs)}, properties: {len(unique_props)}")

    # Filter out already crawled
    to_crawl = []
    for u in unique_suburbs:
        slug = u.split('/')[-1]
        md_file = os.path.join(OUT_DIR, f"suburb_{slug}.md")
        if not os.path.exists(md_file) or os.path.getsize(md_file) < 500:
            to_crawl.append((u, f"suburb_{slug}"))

    for u in unique_props:
        slug = u.split('/')[-1]
        md_file = os.path.join(OUT_DIR, f"property_{slug}.md")
        if not os.path.exists(md_file) or os.path.getsize(md_file) < 500:
            to_crawl.append((u, f"property_{slug}"))

    print(f"[*] Need to crawl: {len(to_crawl)} pages")

    browser_cfg = BrowserConfig(headless=True, verbose=False)
    run_cfg = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, page_timeout=35000, word_count_threshold=5)

    async with AsyncWebCrawler(config=browser_cfg) as crawler:
        for i, (url, name) in enumerate(to_crawl):
            md_file = os.path.join(OUT_DIR, f"{name}.md")
            print(f"[{i+1}/{len(to_crawl)}] Crawling: {url}")
            try:
                res = await crawler.arun(url=url, config=run_cfg)
                content = res.markdown or ""
                if len(content) > 500:
                    with open(md_file, "w", encoding="utf-8") as f:
                        f.write(content)
                    meta_file = os.path.join(OUT_DIR, f"{name}_meta.json")
                    links = []
                    if hasattr(res, "links") and res.links:
                        links = [l.get("href") for l in res.links if isinstance(l, dict) and "href" in l]
                    with open(meta_file, "w", encoding="utf-8") as f:
                        json.dump({
                            "url": url,
                            "status_code": res.status_code,
                            "success": res.success,
                            "content_length": len(content),
                            "total_links": len(links),
                        }, f, indent=2)
                    print(f"  -> {len(content)} chars, status={res.status_code}")
                else:
                    print(f"  -> SKIPPED (too short: {len(content)} chars, status={res.status_code})")
            except Exception as e:
                print(f"  -> ERROR: {e}")

            # Rate limit protection - wait between requests
            await asyncio.sleep(2)

    print("[*] Crawl complete!")

if __name__ == "__main__":
    asyncio.run(run_crawler())
