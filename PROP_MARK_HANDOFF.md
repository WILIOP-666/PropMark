# PropMark — Reverse Engineering & Rebuild Handoff

## Project Overview
- **Repo**: https://github.com/WILIOP-666/PropMark (branch: main)
- **Local path**: C:\laragon\www\propmark
- **Goal**: Full reverse-engineering of Microburbs Australia property intelligence platform, rebuilt as PROP MARK
- **Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Leaflet GIS, in-memory TS data layer

## Current State (as of commit 6e3f1f4)

### What's Complete
1. **Next.js 14 App Router** — full frontend scaffold with editorial utilitarian design (warm cream #fefcf5, Suisse Int'l, 1px hairlines, zero shadows)
2. **586 suburbs database** — `src/lib/data/suburbsData.ts` (2.83 MB) with market metrics, demographics, schools, zoning, hazards, commute
3. **203+ property listings** — `src/lib/data/propertiesData.ts` with AVM, specs, sales history, CMA comparables
4. **Real cadastral boundaries** — `src/lib/data/boundaryGeoData.ts` (Belmont North 95pts, Manly 204pts+5 neighbours, Richmond 111pts, Gosford 129pts)
5. **Dynamic OSM boundary API** — `/api/shapes/[slug]` fetches real boundary from OSM Nominatim with 24h cache, falls back to hardcoded
6. **Watermark-free tile proxy** — `/api/tiles/[z]/[x]/[y]/route.ts` proxies Microburbs CDN clean retina tiles
7. **Interactive maps** — Leaflet with Suburb/Microburb toggle, dark mode, mobile-first responsive
8. **Dark mode** — full :root/.dark tokens, ThemeToggle slider, anti-FOUC script
9. **Error boundaries** — not-found.tsx, error.tsx, global-error.tsx (Vercel build fix)
10. **Classic suburb reports** — `/suburb-reports-classic/[slug]` with 9-section sticky nav
11. **Property reports** — `/property-reports/[slug]` with AVM, gallery, CMA, investment calc
12. **Multi-suburb comparison** — `/compare` with MultiSuburbMap
13. **PDF export** — ReportActionBar with print/PDF clean sheet
14. **Apache vhost** — propmark.test → 127.0.0.1:3000
15. **TypeScript** — `npx tsc --noEmit` exits 0

### Crawl4AI Reverse Engineering
- **Tool**: crawl4ai (AsyncWebCrawler) installed via `uv pip install crawl4ai`
- **Pages crawled**: 739+ suburb reports + 225 static pages = ~964 total
- **Location**: `docs/checkpoints/phase-5-reverse-engineering-raw/crawled/`
- **Script**: `scripts/crawl_suburbs_props.py`
- **Sitemap**: `docs/checkpoints/phase-5-reverse-engineering-raw/crawled/10_sitemap.xml` (2,072 URLs total)
- **Progress**: ~739/903 unique suburb slugs crawled, property reports not yet crawled

### Key Data Sources
- **Microburbs CDN**: `https://www.microburbs.com.au/cdn/basemap/light_all/{z}/{x}/{y}@2x.png` (clean retina tiles)
- **OSM Nominatim**: `https://nominatim.openstreetmap.org/search?q={name},+{state},+Australia&format=json&polygon_geojson=1&limit=1` (real boundaries)
- **Australian postcodes**: `scripts/australian_postcodes.csv` (18,535 records) for coordinate correction
- **Microburbs sitemap**: 2,072 URLs (suburb reports, property reports, static pages)

### What Still Needs To Be Done

#### Phase 1: Complete Crawl
- [ ] Finish remaining ~164 suburb reports (739/903 done)
- [ ] Crawl property reports (0 done so far)
- [ ] Crawl full suburb reports (non-lite) for detailed data
- [ ] Parse crawled markdown into structured data to enrich suburbsData.ts

#### Phase 2: Data Enrichment
- [ ] Enrich 586 suburbs with real data from crawled reports (median prices, yields, schools, zoning, hazards)
- [ ] Add real property listings from crawled property reports
- [ ] Update boundaryGeoData.ts with real OSM boundaries for all 586 suburbs (currently only 4 hardcoded)
- [ ] Verify all 586 suburbs have real coordinates (currently 3 still use Sydney CBD fallback)

#### Phase 3: Feature Completion
- [ ] Build property finder with real listings
- [ ] Build suburb finder with real search/filter
- [ ] Build region reports page
- [ ] Build pricing page
- [ ] Build about/blog pages
- [ ] Build developers API docs
- [ ] PDF due diligence export (full feature)
- [ ] Multi-suburb comparison (enhance)

#### Phase 4: Documentation
- [ ] Create phase-1 requirements doc
- [ ] Create phase-2 architecture design doc
- [ ] Create phase-3 spec-driven contracts doc
- [ ] Create phase-4 task breakdown doc

#### Phase 5: Quality & Deploy
- [ ] Run full TypeScript check
- [ ] Run build verification
- [ ] Vercel deploy
- [ ] Final git push

### Key Files
| File | Purpose |
|------|---------|
| `src/lib/data/suburbsData.ts` | 586 suburb database (2.83 MB) |
| `src/lib/data/propertiesData.ts` | 203+ property listings |
| `src/lib/data/boundaryGeoData.ts` | Official cadastral boundaries (4 suburbs) |
| `src/components/InteractiveMap.tsx` | Leaflet map with Suburb/Microburb toggle |
| `src/components/MultiSuburbMap.tsx` | National cluster map |
| `src/app/suburb-reports/[slug]/page.tsx` | Modern split-screen suburb report |
| `src/app/suburb-reports-classic/[slug]/page.tsx` | Classic 9-section suburb report |
| `src/app/property-reports/[slug]/page.tsx` | Individual property AVM report |
| `src/app/api/tiles/[z]/[x]/[y]/route.ts` | Watermark-free tile proxy |
| `src/app/api/shapes/[slug]/route.ts` | Real OSM boundary fetcher |
| `src/app/api/compare/route.ts` | Multi-suburb comparison engine |
| `scripts/crawl_suburbs_props.py` | Crawl4AI script for suburb/property reports |
| `scripts/update_all_suburb_coordinates.py` | Coordinate correction from postcodes CSV |
| `scripts/populate_properties.py` | Property data generator |

### Environment
- **Node**: v26.7.0
- **npm**: 11.17.0
- **Python**: 3.14.9 (uv installed)
- **Dev server**: port 3000 (PID varies), Apache vhost propmark.test
- **Git remote**: https://github.com/WILIOP-666/PropMark.git (main)

### Commands
```bash
# Dev server
cd C:/laragon/www/propmark && npm run dev

# TypeScript check
npx tsc --noEmit

# Crawl4AI
python scripts/crawl_suburbs_props.py

# Git push
git add -A && git commit -m "..." && git push origin main
```

### VPS Continuation Notes
1. Clone repo: `git clone https://github.com/WILIOP-666/PropMark.git`
2. Install deps: `npm install`
3. Install crawl4ai: `uv pip install crawl4ai`
4. Continue crawl: `python scripts/crawl_suburbs_props.py` (will skip already-crawled)
5. Continue enrichment and feature building
6. Push changes: `git push origin main`

### Design Tokens (from Design.txt)
- Canvas: #fefcf5 (light) / #141312 (dark)
- Surface: #fffcf6 (light) / #1c1b18 (dark)
- Ink: #3c3a39 (light) / #f5f3ec (dark)
- Accent: #ff272d (red), #2677ff (blue), #fdc211 (yellow)
- Font: Suisse Int'l (sans), Suisse Int'l Mono (mono)
- Borders: 1px hairline rgba(11,9,7,0.1)
- Zero drop-shadow, zero placeholder elements
