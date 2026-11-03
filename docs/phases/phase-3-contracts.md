# Phase 3 — Spec-Driven Contracts

## SuburbProfile Interface
See src/lib/types.ts — SuburbProfile with market, demographics, scores, schools, planning, hazards, commute.

## PropertyListing Interface
See src/lib/types.ts — PropertyListing with AVM, specs, sales history, CMA.

## API Contracts
- GET /api/suburbs — returns SuburbProfile[]
- GET /api/suburbs/[slug] — returns SuburbProfile
- GET /api/properties — returns PropertyListing[]
- GET /api/properties/[id] — returns PropertyListing
- GET /api/compare?slugs=a,b,c — returns comparison data
- GET /api/shapes/[slug] — returns GeoJSON boundary
- GET /api/tiles/[z]/[x]/[y] — returns PNG tile

## Enrichment Contract
- crawledSuburbs.json → enrichedSuburbs.ts (overlay real median prices, rents, yields, population, crime, growth)
- Coverage: 586/586 suburbs in database, 586 matched with crawled data
