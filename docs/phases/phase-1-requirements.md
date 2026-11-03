# Phase 1 — Requirements & Scope

## Goal
Reverse-engineer Microburbs Australia property intelligence platform into PROP MARK.

## Functional Requirements
1. Suburb reports (modern + classic 9-section)
2. Property reports (AVM, gallery, CMA, investment calc)
3. Multi-suburb comparison with map
4. Property finder & suburb finder with search/filter
5. Region reports
6. Pricing, about, blog, academy, contact, brand pages
7. Developers API docs
8. PDF due diligence export

## Non-Functional Requirements
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Leaflet GIS maps, dark mode
- Watermark-free tile proxy
- Real OSM boundaries
- Mobile-first responsive
- TypeScript clean (npx tsc --noEmit = 0)

## Data Sources
- Microburbs sitemap (2,072 URLs)
- Australian postcodes CSV (18,535 records)
- OSM Nominatim (real boundaries)
- Microburbs CDN tiles
