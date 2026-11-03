# Phase 2 — Architecture Design

## Stack
- Next.js 14 App Router (SSG + SSR)
- TypeScript, Tailwind CSS
- Leaflet GIS (Suburb/Microburb toggle)
- In-memory TS data layer (suburbsData.ts, propertiesData.ts)
- API routes for tiles, shapes, compare, geocode

## Data Layer
- `src/lib/data/suburbsData.ts` — 586 suburb profiles (enriched with crawled data)
- `src/lib/data/propertiesData.ts` — 203+ property listings
- `src/lib/data/boundaryGeoData.ts` — cadastral boundaries
- `src/lib/data/crawledSuburbs.json` — 905 crawled suburb reports
- `src/lib/data/crawledProperties.json` — 280 crawled property reports
- `src/lib/data/enrichedSuburbs.ts` — merge layer

## API
- `/api/tiles/[z]/[x]/[y]` — tile proxy
- `/api/shapes/[slug]` — OSM boundary
- `/api/compare` — multi-suburb comparison
- `/api/suburbs`, `/api/properties` — data endpoints

## Design Tokens
- Canvas: #fefcf5 (light) / #141312 (dark)
- Accent: #ff272d (red), #2677ff (blue), #fdc211 (yellow)
- Font: Suisse Int'l
- Zero drop-shadow, 1px hairline borders
