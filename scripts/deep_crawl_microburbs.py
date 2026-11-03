import asyncio
import os
import json
import urllib.request
import ssl
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

TARGET_URLS = [
    ("https://www.microburbs.com.au/", "01_homepage"),
    ("https://www.microburbs.com.au/suburb-reports-lite/gosford-nsw-2250", "02_suburb_report_gosford"),
    ("https://www.microburbs.com.au/suburb-reports-lite/manly-nsw-2095", "03_suburb_report_manly"),
    ("https://www.microburbs.com.au/suburb-reports-lite/belmont-north-nsw-2280", "04_suburb_report_belmont_north"),
    ("https://www.microburbs.com.au/pricing", "05_pricing"),
    ("https://www.microburbs.com.au/developers", "06_developers"),
    ("https://www.microburbs.com.au/definitions", "07_definitions"),
    ("https://www.microburbs.com.au/about", "08_about"),
    ("https://www.microburbs.com.au/suburb-finder", "09_suburb_finder"),
]

OUT_DIR = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled"

async def run_crawler():
    os.makedirs(OUT_DIR, exist_ok=True)
    browser_cfg = BrowserConfig(
        headless=True,
        verbose=False,
    )
    run_cfg = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        page_timeout=35000,
        word_count_threshold=5,
    )

    async with AsyncWebCrawler(config=browser_cfg) as crawler:
        for url, name in TARGET_URLS:
            print(f"[*] Crawl4AI fetching: {url} -> {name}")
            try:
                res = await crawler.arun(url=url, config=run_cfg)
                md_file = os.path.join(OUT_DIR, f"{name}.md")
                meta_file = os.path.join(OUT_DIR, f"{name}_meta.json")

                content = res.markdown or ""
                with open(md_file, "w", encoding="utf-8") as f:
                    f.write(content)

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
                        "sample_links": links[:30],
                    }, f, indent=2)

                print(f"[+] Saved {name}: {len(content)} characters, status={res.status_code}")
            except Exception as e:
                print(f"[-] Error crawling {url}: {e}")

    # Fetch sitemap.xml directly
    sitemap_url = "https://www.microburbs.com.au/sitemap.xml"
    print(f"[*] Fetching sitemap: {sitemap_url}")
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(sitemap_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            sitemap_xml = resp.read().decode("utf-8", errors="ignore")
            sitemap_path = os.path.join(OUT_DIR, "10_sitemap.xml")
            with open(sitemap_path, "w", encoding="utf-8") as f:
                f.write(sitemap_xml)
            print(f"[+] Saved sitemap.xml: {len(sitemap_xml)} characters")
    except Exception as e:
        print(f"[-] Error fetching sitemap: {e}")

if __name__ == "__main__":
    asyncio.run(run_crawler())
