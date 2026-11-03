# PROP MARK — Australian Property Intelligence & Suburb Analytics Platform

A high-performance, reverse-engineered Australian real estate due diligence platform built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Leaflet Spatial GIS**. 

Inspired by editorial type-design aesthetics (`Design.txt`) and powered by deep statistical analysis of 25 years of settlement records, G-NAF spatial coordinates, ABS Census 2021/2026 QuickStats, ACARA school performance records, and council planning registers.

---

## 🌟 Key Features

### 1. Two-Column Split-Screen Suburb Reports (`/suburb-reports/[slug]`)
- **Pinned Sticky Leaflet Spatial Engine**: Synchronized split-screen desktop experience with mobile-first order prioritizing spatial comprehension.
- **Dual Granularity Modes**:
  - **`Suburb` (Default)**: Clean, high-fidelity 95-point cadastral boundaries (extracted along arterial corridors like the Pacific Highway) with surrounding cadastre mosaics.
  - **`Microburb`**: Granular ABS SA1 mesh-block pocket medians rendered with ColorBrewer Spectral choropleth color ramps ($750k to $2.5M+).
- **Interactive Multi-Layer Overlays**:
  - Median sale price choropleth by mesh-block.
  - Gross rental yield heatmap.
  - 12-Month capital growth vectors.
  - Catchment schools with ACARA ICSEA scoring.
  - Planning overlays: Active development applications (DAs) and $5M+ major projects.
  - Environmental risks: SES flood mapping, RFS bushfire vegetation buffers, ANEF aircraft noise contours, and SA1 public housing density.
- **Due Diligence Action Bar**: Instant print-ready `@media print` PDF export and shareable canonical URLs.
- **Mortgage & Cashflow Simulator**: Interactive repayment calculator with LVR sliders, stamp duty estimation, and net yield projections.

### 2. Australian Suburb Screener & Matrix Table (`/suburb-finder`)
- **Coverage**: 586 Australian suburbs across NSW, VIC, QLD, WA, SA, TAS, NT, and ACT.
- **Dynamic Filtering**:
  - State & territory multi-select.
  - Maximum house price slider ($500k – $4.5M+).
  - Minimum gross rental yield slider (2.0% – 6.0%+).
  - Minimum 12-month capital growth slider.
- **Strategy Presets**:
  - ⚡ *High Cashflow Yield (≥4.0%)*
  - 📈 *Capital Growth Compounders (≥5.0% YoY)*
  - 🏡 *First Home Buyers Under Cap (≤$850k)*
  - 💎 *Prestige & Blue-Chip Suburbs*
- **View Modes**:
  - **Editorial Card Grid**: Visual snapshot of metrics and quick tags.
  - **Matrix Table**: High-density sortable table with sticky headers and mobile horizontal scroll container.
  - **Spatial Cluster Map**: National interactive map plotting suburbs with color-coded yield/growth pins.

### 3. Head-to-Head Market Comparison Engine (`/compare`)
- Compare up to 3 suburbs simultaneously side-by-side.
- Real-time client-side calculation of category winners across 14 financial and demographic indicators:
  - Median House & Unit Prices
  - Rental Yields & 5-Year Capital Growth Rates
  - ABS Median Household Incomes & Tertiary Education %
  - School Catchment ICSEA Scores
  - Environmental Hazards & Public Housing Concentrations
- Multi-polygon Leaflet map rendering each compared suburb with distinct colored boundary strokes.

### 4. Property Valuation Explorer & AVM Engine (`/property-finder`)
- **Automated Valuation Model (AVM)** with statistical low/high confidence intervals.
- Individual property profile pages (`/property-reports/[slug]`) featuring:
  - Estimated valuation range and rental cashflow appraisal.
  - Land area, building area, zoning code, and bedroom/bathroom specs.
  - CMA (Comparative Market Analysis) with nearest-neighbour recent transactions.

### 5. Developer REST API & Data Dictionary
- **API Documentation (`/developers/api-docs`)**: Interactive developer console detailing 60+ endpoints with request headers, rate limits, and JSON response contracts.
- **Data Dictionary (`/definitions`)**: Exhaustive statutory and econometric glossary covering ABS Census variables, planning acronyms (LEP, DCP, G-NAF), and risk metrics (AEP, BAL, ANEF).

---

## 🎨 Design System & Theme Engine

Built on the editorial type-design principles of modern developer tools:

### Light Mode (Warm Cream Paper)
- **Primary Canvas**: `#fefcf5` (warm cream paper)
- **Surface Cards**: `#fffcf6` (warm white card)
- **Primary Ink**: `#3c3a39` (warm near-black text)
- **Dividers & Borders**: `rgba(11, 9, 7, 0.1)` (quiet hairline definition)

### Dark Mode (Executive Obsidian)
- **Primary Canvas**: `#141312` (deep obsidian paper)
- **Surface Cards**: `#1c1b18` (rich charcoal surface)
- **Primary Ink**: `#f5f3ec` (warm cream text on dark)
- **Dividers & Borders**: `rgba(245, 243, 236, 0.12)` (subtle high-contrast borders)

### Theme Toggle
- Minimalist Sun/Moon pill switch in the main navigation.
- Automatic system preference detection (`prefers-color-scheme`) with persistent `localStorage` cache.
- Zero Flash-Of-Unstyled-Content (FOUC) via blocking inline `<script>` in `<head>`.

### Typography Tokens
- **Prose & Display**: `Suisse Int'l` with tight heading tracking and fluid `clamp()` responsive scaling.
- **Eyebrows & Technical Paths**: `Suisse Int'l Mono` with signature `/slash-prefix` labels (e.g. `/due diligence & hazards`, `/abs census 2021-2026 data`).

---

## 🗄️ Database Architecture & File Locations

All spatial, financial, and demographic records are structured into zero-dependency, in-memory TypeScript database modules ensuring sub-20ms SSR responses without external database latencies:

| Module | Location | Records / Size | Description |
|---|---|---|---|
| **Suburb Database** | `src/lib/data/suburbsData.ts` | 586 Suburbs (2.83 MB) | Full census statistics, median sales, rental yields, capital growth, schools, planning, and environmental risks. |
| **Properties Database** | `src/lib/data/propertiesData.ts` | 203 Properties (120 KB) | Granular street-level listings, AVM valuations, historical sale events, land size, and bedroom configurations. |
| **Cadastre Boundaries** | `src/lib/data/boundaryGeoData.ts` | 95 Points + 10 Mosaics | Official 95-point cadastral polygon coordinates along arterial highway corridors and surrounding suburb blocks. |
| **Glossary Data** | `src/lib/data/glossaryData.ts` | 30+ Terms | Australian real estate terminology, formulas, and statutory references. |
| **REST Endpoints** | `src/app/api/*` | 4 Core Handlers | `/api/suburbs`, `/api/properties`, `/api/shapes/[slug]`, and `/api/compare`. |

---

## 🗺️ Spatial Basemap & Tile Proxy System

- **Vector Tiles**: CartoDB Positron Retina `@2x`.
- **Watermark Prevention**: Clean retina tiles are routed via the internal proxy route `/api/tiles/[z]/[x]/[y]/route.ts` with 30-day response caching (`Cache-Control: public, max-age=2592000`), completely eliminating `API KEY REQUIRED` watermarks.
- **Leaflet Integration**: Leaflet CSS is loaded via high-availability CDN link tag in `src/app/layout.tsx` to ensure zero compilation friction with Next.js webpack PostCSS minimizers.

---

## 🛠️ Tech Stack & Design System

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design Tokens**: Warm cream paper canvas (`#fefcf5`), warm white surface cards (`#fffcf6`), near-black ink (`#3c3a39`), and muted pastels.
- **Typography**: Suisse Int'l & Suisse Int'l Mono (with signature `/slash-prefix` eyebrows).
- **Mapping & GIS**: Leaflet, CartoDB Positron Retina `@2x`, GeoJSON RFC 7946 Polygons.
- **Charts**: Pure responsive SVG charts (`PriceChart.tsx`, `ScoreRadar.tsx`).

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/WILIOP-666/PropMark.git

# Navigate into project directory
cd PropMark

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or configure Laragon Apache virtual host `http://propmark.test`.
