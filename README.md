# PROP MARK — Australian Property Intelligence & Suburb Analytics Platform

A high-performance, reverse-engineered Australian real estate due diligence platform built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Leaflet Spatial GIS**. 

Inspired by editorial type-design aesthetics (`Design.txt`) and powered by deep statistical analysis of 25 years of settlement records, G-NAF spatial coordinates, ABS Census 2021/2026 QuickStats, ACARA school performance records, and council planning registers.

---

## 🌟 Key Features

1. **Two-Column Split-Screen Suburb Reports**:
   - Pinned sticky Leaflet map with CartoDB Positron Retina basemap.
   - Dual-granularity spatial view: **Microburb** (ABS SA1 mesh-block pocket medians) vs **Suburb** (population-weighted uniform polygon).
   - Interactive ColorBrewer Spectral gradient bar for price and yield choropleth scaling.
   - Surrounding neighbouring suburbs polygon boundary overlay with hover tooltip inspection.
   - Active layer toggles: *Median sale price*, *Gross rental yield*, *12M Capital growth*, *Schools*, and *Hazards*.

2. **Australian Suburb Screener & Finder (`/suburb-finder`)**:
   - Filter over 585+ Australian suburbs across NSW, VIC, QLD, WA, SA, TAS, and ACT.
   - Range controls: Max Price ($500k – $4.5M+), Min Yield %, Min 12M Growth %.
   - Instant investor strategy presets:
     - ⚡ *High Cashflow Yield (≥4.0%)*
     - 📈 *Capital Growth (≥5.0% YoY)*
     - 🏡 *First Home Buyers (≤$850k)*
     - 💎 *Prestige & Blue-Chip*
   - Three view modes: **Card Grid**, **Matrix Table**, and **Interactive Spatial Map**.

3. **Side-by-Side Market Comparison Engine (`/compare`)**:
   - Compare up to 3 suburbs simultaneously across pricing, yields, vacancy rates, census income, school ICSEA scores, and environmental hazards.
   - Automated category winners calculated instantaneously on the client.

4. **Property Valuation & AVM Explorer (`/property-finder`)**:
   - Automated Valuation Model (AVM) with measurable confidence bounds.
   - CMA nearest-neighbour comparable sales.
   - Floor area, land area, zoning codes, and rental cashflow appraisal.

5. **Buyer's Agent Due Diligence PDF Pack**:
   - Dedicated print-ready `@media print` layout.
   - Single-click export to clean multi-page document without header/footer clutter.

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
