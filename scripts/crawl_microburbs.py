import asyncio
import os
import json
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

async def crawl_target(url, output_name):
    browser_config = BrowserConfig(
        headless=True,
        verbose=True,
    )
    run_config = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        word_count_threshold=10,
        page_timeout=30000,
    )

    out_dir = r"C:\laragon\www\propmark\docs\checkpoints\phase-5-reverse-engineering-raw\crawled"
    os.makedirs(out_dir, exist_ok=True)

    async with AsyncWebCrawler(config=browser_config) as crawler:
        print(f"[CRAWL4AI] Crawling {url}...")
        result = await crawler.arun(url=url, config=run_config)
        print(f"[CRAWL4AI] Result for {url}: status={result.status_code}, success={result.success}")
        
        md_path = os.path.join(out_dir, f"{output_name}.md")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(result.markdown or "")

        meta_path = os.path.join(out_dir, f"{output_name}_meta.json")
        with open(meta_path, "w", encoding="utf-8") as f:
            json.dump({
                "url": url,
                "status_code": result.status_code,
                "success": result.success,
                "links": result.links if hasattr(result, "links") else [],
                "media": result.media if hasattr(result, "media") else {},
                "title": result.metadata.get("title") if result.metadata else ""
            }, f, indent=2)

        print(f"[CRAWL4AI] Saved to {md_path} ({len(result.markdown or '')} chars)")
        return result

async def main():
    targets = [
        ("https://www.microburbs.com.au/", "homepage"),
        ("https://www.microburbs.com.au/suburb-reports/Gosford", "suburb_report_gosford"),
        ("https://www.microburbs.com.au/pricing", "pricing"),
        ("https://www.microburbs.com.au/developers", "developers"),
        ("https://www.microburbs.com.au/definitions", "definitions")
    ]
    for url, name in targets:
        try:
            await crawl_target(url, name)
        except Exception as e:
            print(f"[ERROR] Failed {url}: {e}")

if __name__ == "__main__":
    asyncio.run(main())
