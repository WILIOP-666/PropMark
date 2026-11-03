import asyncio
import os
import json
import re
import urllib.request
import ssl
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

SITEMAP_PATH = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled\10_sitemap.xml"
OUT_DIR = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled"

async def run_crawler():
    os.makedirs(OUT_DIR, exist_ok=True)

    with open(SITEMAP_PATH, 'r', encoding='utf-8') as f:
        xml = f.read()
    urls = re.findall(r'<loc>(.*?)</loc>', xml)

    # Deduplicate and prioritize: static pages first, then suburb reports, then property reports
    static_urls = [u for u in urls if not any(x in u for x in ['suburb-reports', 'property-reports', 'suburb-reports-lite', 'property-reports-lite'])]
    suburb_urls = [u for u in urls if 'suburb-reports' in u or 'suburb-reports-lite' in u]
    property_urls = [u for u in urls if 'property-reports' in u or 'property-reports-lite' in u]

    # Sample suburb reports (first 20 unique slugs) + all static pages
    seen_slugs = set()
    sampled_suburbs = []
    for u in suburb_urls:
        slug = u.split('/')[-1]
        if slug not in seen_slugs:
            seen_slugs.add(slug)
            sampled_suburbs.append(u)
            if len(sampled_suburbs) >= 25:
                break

    seen_prop_slugs = set()
    sampled_props = []
    for u in property_urls:
        slug = u.split('/')[-1]
        if slug not in seen_prop_slugs:
            seen_prop_slugs.add(slug)
            sampled_props.append(u)
            if len(sampled_props) >= 10:
                break

    targets = []
    for u in static_urls:
        name = u.split('/')[-1] or 'homepage'
        targets.append((u, f"page_{name}"))
    for u in sampled_suburbs:
        slug = u.split('/')[-1]
        targets.append((u, f"suburb_{slug}"))
    for u in sampled_props:
        slug = u.split('/')[-1]
        targets.append((u, f"property_{slug}"))

    print(f"[*] Total targets: {len(targets)} ({len(static_urls)} static, {len(sampled_suburbs)} suburbs, {len(sampled_props)} properties)")

    browser_cfg = BrowserConfig(headless=True, verbose=False)
    run_cfg = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, page_timeout=35000, word_count_threshold=5)

    async with AsyncWebCrawler(config=browser_cfg) as crawler:
        for i, (url, name) in enumerate(targets):
            md_file = os.path.join(OUT_DIR, f"{name}.md")
            if os.path.exists(md_file) and os.path.getsize(md_file) > 500:
                print(f"[{i+1}/{len(targets)}] SKIP (already crawled): {name}")
                continue

            print(f"[{i+1}/{len(targets)}] Crawling: {url}")
            try:
                res = await crawler.arun(url=url, config=run_cfg)
                content = res.markdown or ""
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
                        "sample_links": links[:20],
                    }, f, indent=2)

                print(f"  -> {len(content)} chars, status={res.status_code}")
            except Exception as e:
                print(f"  -> ERROR: {e}")

    print("[*] Crawl complete!")

if __name__ == "__main__":
    asyncio.run(run_crawler())
