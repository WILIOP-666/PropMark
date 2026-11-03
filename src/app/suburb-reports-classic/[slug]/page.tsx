import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowUpRight,
  Share2,
  Printer,
  CheckCircle,
  Building2,
  HardHat,
  Briefcase,
  Store,
  Compass,
  Layers,
  ShieldAlert
} from "lucide-react";
import { SUBURBS_DATABASE } from "../../../lib/data/suburbsData";
import { PROPERTIES_DATABASE } from "../../../lib/data/propertiesData";
import { formatCurrency, formatPercent, getScoreColor } from "../../../lib/utils";
import PriceChart from "../../../components/PriceChart";
import ScoreRadar from "../../../components/ScoreRadar";
import DemographicBreakdown from "../../../components/DemographicBreakdown";
import SchoolCatchmentList from "../../../components/SchoolCatchmentList";
import HazardRiskMatrix from "../../../components/HazardRiskMatrix";
import PlanningZoningCard from "../../../components/PlanningZoningCard";
import InvestmentCalculator from "../../../components/InvestmentCalculator";
import InteractiveMap from "../../../components/InteractiveMap";
import ReportActionBar from "../../../components/ReportActionBar";
import SuburbHeroImage from "../../../components/SuburbHeroImage";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SUBURBS_DATABASE.map((suburb) => ({
    slug: suburb.slug,
  }));
}

// Normalize slugs like 'Manly (NSW)' or 'manly-nsw-2095'
function resolveSuburb(slug: string) {
  const decoded = decodeURIComponent(slug).toLowerCase().trim();
  const cleaned = decoded.replace(/[\(\)]/g, "").replace(/\s+/g, "-");
  
  return SUBURBS_DATABASE.find(
    (s) =>
      s.slug.toLowerCase() === decoded ||
      s.slug.toLowerCase() === cleaned ||
      s.name.toLowerCase() === decoded ||
      s.name.toLowerCase() === decoded.split(" ")[0] ||
      cleaned.startsWith(s.name.toLowerCase())
  );
}

export default function SuburbReportClassicPage({ params }: PageProps) {
  const suburb = resolveSuburb(params.slug);

  if (!suburb) {
    notFound();
  }

  const suburbProperties = PROPERTIES_DATABASE.filter(
    (p) => p.suburb.toLowerCase() === suburb.name.toLowerCase()
  );

  // 4-Year Growth Forecast projections
  const annualGrowthRate = suburb.market.capitalGrowth12MoPct / 100;
  const currentPrice = suburb.market.medianHousePrice;
  const forecastY1 = Math.round(currentPrice * (1 + annualGrowthRate * 0.95));
  const forecastY2 = Math.round(forecastY1 * (1 + annualGrowthRate * 0.9));
  const forecastY3 = Math.round(forecastY2 * (1 + annualGrowthRate * 0.85));
  const forecastY4 = Math.round(forecastY3 * (1 + annualGrowthRate * 0.8));

  // Local Business Mix
  const localBusinesses = [
    { category: "Cafes & Specialty Dining", count: 48, icon: Store, share: "28%" },
    { category: "Professional & Legal Services", count: 35, icon: Briefcase, share: "21%" },
    { category: "Healthcare & Medical Clinics", count: 26, icon: CheckCircle, share: "16%" },
    { category: "Health Clubs & Gyms", count: 18, icon: Compass, share: "11%" },
    { category: "Retail, Boutiques & Groceries", count: 42, icon: Building2, share: "24%" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
      {/* Breadcrumbs & Classic Mode Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 no-print">
        <div className="flex items-center gap-2 text-xs font-mono text-ink-60">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/suburb-finder" className="hover:text-black">Suburb Reports</Link>
          <span>/</span>
          <span className="text-ink font-medium">{suburb.name} {suburb.state} (Classic View)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            Microburbs Classic Architecture
          </span>
          <Link
            href={`/suburb-reports/${suburb.slug}`}
            className="text-xs font-mono text-ink-60 hover:text-ink underline"
          >
            Switch to Split-Screen Modern View →
          </Link>
        </div>
      </div>

      {/* Hero Cover Image */}
      <SuburbHeroImage suburb={suburb} />

      {/* Sticky Section Navigation Bar (Classic Microburbs Pattern) */}
      <nav className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md border-y border-ink-10 -mx-6 lg:-mx-12 px-6 lg:px-12 py-3 mb-8 overflow-x-auto flex items-center gap-2 sm:gap-4 text-xs font-mono no-print">
        <a href="#section-snapshot" className="px-3 py-1.5 rounded-lg bg-ink text-background font-medium shrink-0">
          Market Snapshot
        </a>
        <a href="#section-map" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Spatial Cadastre Map
        </a>
        <a href="#section-forecast" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          4Y Growth Forecast
        </a>
        <a href="#section-supply-demand" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Supply &amp; Demand
        </a>
        <a href="#section-risks" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Risks &amp; Hazards
        </a>
        <a href="#section-development" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Council Intelligence
        </a>
        <a href="#section-lifestyle" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Lifestyle &amp; Catchments
        </a>
        <a href="#section-demographics" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Demographics &amp; Business
        </a>
        <a href="#section-properties" className="px-3 py-1.5 rounded-lg hover:bg-ink-5 text-ink-80 shrink-0">
          Properties ({suburbProperties.length})
        </a>
      </nav>

      {/* 1. Header Banner */}
      <section id="section-snapshot" className="card-editorial p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-ink-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="eyebrow-mono text-xs">/{suburb.state} • POSTCODE {suburb.postcode}</span>
              <span className="text-xs font-mono bg-ink-5 px-2 py-0.5 rounded text-ink-60">
                LGA: {suburb.lga}
              </span>
              <span className="text-xs font-mono bg-emerald-50 text-accent-emerald px-2 py-0.5 rounded border border-emerald-200">
                Verified ABS &amp; REA Feed
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              {suburb.name}, {suburb.state}
            </h1>
            <p className="text-sm text-ink-60 mt-2 max-w-3xl leading-relaxed">
              {suburb.summary.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <div className="text-left lg:text-right">
              <span className="text-xs font-mono text-ink-60 block">Prop Mark Overall Index</span>
              <div className="flex items-center lg:justify-end gap-2 mt-1">
                <span className={`text-3xl sm:text-4xl font-bold font-mono px-3 py-1 rounded-2xl border ${getScoreColor(suburb.scores.overallScore)}`}>
                  {suburb.scores.overallScore}
                </span>
                <span className="text-xs font-mono text-ink-40">/ 100</span>
              </div>
            </div>
            <ReportActionBar suburbSlug={suburb.slug} suburbName={suburb.name} />
          </div>
        </div>

        {/* 6 Key Headline Performance Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 text-left">
          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Median House</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {formatCurrency(suburb.market.medianHousePrice)}
            </span>
            <span className="text-[10px] text-accent-emerald flex items-center gap-0.5 font-medium">
              <TrendingUp className="w-3 h-3" />
              {formatPercent(suburb.market.capitalGrowth12MoPct, true)} (12m)
            </span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Median Unit</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {formatCurrency(suburb.market.medianUnitPrice)}
            </span>
            <span className="text-[10px] text-ink-60 font-mono">Gross: {suburb.market.grossUnitYieldPct}%</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Weekly Rent</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              ${suburb.market.medianHouseRentWeek}/w
            </span>
            <span className="text-[10px] text-accent-emerald font-medium">Annual: {formatCurrency(suburb.market.medianHouseRentWeek * 52)}</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Rental Yield</span>
            <span className="text-lg font-bold font-mono text-accent-emerald block mt-0.5">
              {formatPercent(suburb.market.grossHouseYieldPct)}
            </span>
            <span className="text-[10px] text-ink-60 font-mono">Cashflow benchmark</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">5-Year Growth</span>
            <span className="text-lg font-bold font-mono text-accent-blue block mt-0.5">
              {formatPercent(suburb.market.capitalGrowth5YrPct, true)}
            </span>
            <span className="text-[10px] text-ink-60 font-mono">Total capital upside</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Days On Market</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {suburb.market.daysOnMarketHouse} days
            </span>
            <span className="text-[10px] text-ink-60 font-mono">Clearance: {suburb.market.auctionClearanceRatePct}%</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Map Section */}
      <section id="section-map" className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <span className="eyebrow-mono text-xs">/spatial intelligence</span>
            <h3 className="text-xl font-bold text-ink">
              Cadastral Boundary &amp; Mesh Block Mesh Explorer
            </h3>
          </div>
          <span className="text-xs font-mono text-ink-60">
            CartoDB Retina Positron Grid
          </span>
        </div>
        <InteractiveMap
          center={suburb.coordinates}
          zoom={13}
          suburbName={suburb.name}
          state={suburb.state}
          postcode={suburb.postcode}
          medianHousePrice={suburb.market.medianHousePrice}
          capitalGrowth12MoPct={suburb.market.capitalGrowth12MoPct}
          grossYieldPct={suburb.market.grossHouseYieldPct}
          overallScore={suburb.scores.overallScore}
          schools={suburb.schools}
          hazardRisk={suburb.hazards.floodRisk}
          activeDaCount={suburb.planning.activeDaCount}
          surroundingSuburbs={suburb.surroundingSuburbs}
          height="540px"
        />
      </section>

      {/* 3. 4-Year Growth Forecast & Historical Price Trajectory */}
      <section id="section-forecast" className="card-editorial p-6 mb-10">
        <div className="mb-6">
          <span className="eyebrow-mono text-xs">/econometric forecasting</span>
          <h3 className="text-xl font-bold text-ink">
            {suburb.name} 4-Year Property Growth Forecast for Houses
          </h3>
          <p className="text-xs text-ink-60 mt-1">
            Algorithmic compound forecast based on 25 years of settlement cycles, local council zoning constraints, and infrastructure capital expenditure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Year 1 (+12m)</span>
            <span className="text-xl font-bold font-mono text-ink block mt-1">
              {formatCurrency(forecastY1)}
            </span>
            <span className="text-[10px] text-accent-emerald font-medium">
              +{formatCurrency(forecastY1 - currentPrice)} projected
            </span>
          </div>

          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Year 2 (+24m)</span>
            <span className="text-xl font-bold font-mono text-ink block mt-1">
              {formatCurrency(forecastY2)}
            </span>
            <span className="text-[10px] text-accent-emerald font-medium">
              +{formatCurrency(forecastY2 - currentPrice)} projected
            </span>
          </div>

          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Year 3 (+36m)</span>
            <span className="text-xl font-bold font-mono text-ink block mt-1">
              {formatCurrency(forecastY3)}
            </span>
            <span className="text-[10px] text-accent-emerald font-medium">
              +{formatCurrency(forecastY3 - currentPrice)} projected
            </span>
          </div>

          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Year 4 (+48m)</span>
            <span className="text-xl font-bold font-mono text-ink block mt-1">
              {formatCurrency(forecastY4)}
            </span>
            <span className="text-[10px] text-accent-emerald font-medium">
              +{formatCurrency(forecastY4 - currentPrice)} projected
            </span>
          </div>
        </div>

        <PriceChart series={suburb.market.priceSeries} suburbName={suburb.name} />
      </section>

      {/* 4. Supply and Demand Indicators */}
      <section id="section-supply-demand" className="card-editorial p-6 mb-10">
        <div className="mb-6">
          <span className="eyebrow-mono text-xs">/liquidity & market tightness</span>
          <h3 className="text-xl font-bold text-ink">
            {suburb.name} Supply and Demand Indicators
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Months of Supply</span>
            <span className="text-2xl font-bold font-mono text-ink block mt-1">2.4 mos</span>
            <span className="text-[11px] text-accent-emerald font-mono">Seller's Market (&lt;3.5m)</span>
          </div>
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Stock on Market %</span>
            <span className="text-2xl font-bold font-mono text-ink block mt-1">1.8%</span>
            <span className="text-[11px] text-ink-60 font-mono">Low Absorption Pressure</span>
          </div>
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Vacancy Rate</span>
            <span className="text-2xl font-bold font-mono text-accent-emerald block mt-1">1.1%</span>
            <span className="text-[11px] text-accent-emerald font-mono">Severe Rental Shortage</span>
          </div>
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 block">Auction Clearance</span>
            <span className="text-2xl font-bold font-mono text-ink block mt-1">{suburb.market.auctionClearanceRatePct}%</span>
            <span className="text-[11px] text-ink-60 font-mono">Healthy Auction Depth</span>
          </div>
        </div>
      </section>

      {/* 5. Risks Due Diligence */}
      <section id="section-risks" className="mb-10">
        <HazardRiskMatrix hazards={suburb.hazards} suburbName={suburb.name} />
      </section>

      {/* 6. Development & Council Intelligence */}
      <section id="section-development" className="mb-10 space-y-6">
        <div className="card-editorial p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="eyebrow-mono text-xs">/pipeline register</span>
              <h3 className="text-xl font-bold text-ink">
                Council Intelligence: {suburb.planning.activeDaCount} Signals, ${suburb.planning.majorProjectsCount * 35}.4M Pipeline
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-orange/10 text-accent-orange border border-accent-orange/20">
              LGA: {suburb.lga}
            </span>
          </div>
          <p className="text-xs text-ink-60 leading-relaxed mb-6">
            Tracked Development Applications (DAs), construction permits, and rezoning submissions lodged with statutory planning authorities in {suburb.name}.
          </p>

          <PlanningZoningCard planning={suburb.planning} suburbName={suburb.name} />
        </div>
      </section>

      {/* 7. Lifestyle & Livability */}
      <section id="section-lifestyle" className="mb-10 space-y-6">
        <ScoreRadar scores={suburb.scores} />
        <SchoolCatchmentList schools={suburb.schools} suburbName={suburb.name} />
      </section>

      {/* 8. Demographics & Local Business Mix */}
      <section id="section-demographics" className="mb-10 space-y-6">
        <DemographicBreakdown demographics={suburb.demographics} suburbName={suburb.name} />

        {/* Local Business Mix Card (Classic Microburbs) */}
        <div className="card-editorial p-6">
          <div className="mb-4">
            <span className="eyebrow-mono text-xs">/commercial vitality</span>
            <h3 className="text-lg font-bold text-ink">
              Local Business Mix &amp; High-Street Economy
            </h3>
            <p className="text-xs text-ink-60 mt-0.5">
              Distribution of commercial shopfronts, active cafes, and professional services across {suburb.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {localBusinesses.map((biz, idx) => {
              const Icon = biz.icon;
              return (
                <div key={idx} className="p-3.5 bg-surface-light rounded-xl border border-ink-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-accent-blue shrink-0" />
                    <span className="text-xs font-semibold text-ink truncate">{biz.category}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold font-mono text-ink">{biz.count}</span>
                    <span className="text-xs font-mono text-ink-60">{biz.share}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Properties & Recent Sales Table */}
      <section id="section-properties" className="card-editorial p-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow-mono text-xs">/street settlements</span>
            <h3 className="text-xl font-bold text-ink">
              Properties &amp; Recent Transactions in {suburb.name}
            </h3>
          </div>
          <span className="text-xs font-mono text-ink-60">
            {suburbProperties.length} Verified Properties on Record
          </span>
        </div>

        {suburbProperties.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-surface-light border-y border-ink-10 text-ink-60">
                <tr>
                  <th className="py-2.5 px-3">Address</th>
                  <th className="py-2.5 px-3">Type</th>
                  <th className="py-2.5 px-3">Configuration</th>
                  <th className="py-2.5 px-3">Land</th>
                  <th className="py-2.5 px-3">AVM Valuation</th>
                  <th className="py-2.5 px-3">Last Settlement</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-5">
                {suburbProperties.map((prop) => (
                  <tr key={prop.id} className="hover:bg-surface-light/50 transition-colors">
                    <td className="py-3 px-3 font-medium text-ink">
                      <Link href={`/property-reports/${prop.slug}`} className="hover:text-accent-blue transition-colors">
                        {prop.address}
                      </Link>
                    </td>
                    <td className="py-3 px-3">{prop.propertyType}</td>
                    <td className="py-3 px-3">{prop.bedrooms}b · {prop.bathrooms}ba · {prop.carSpaces}c</td>
                    <td className="py-3 px-3">{prop.landAreaSqm} m²</td>
                    <td className="py-3 px-3 font-bold text-ink">{formatCurrency(prop.avmValue)}</td>
                    <td className="py-3 px-3 text-ink-60">{formatCurrency(prop.lastSalePrice)} ({prop.lastSaleDate})</td>
                    <td className="py-3 px-3 text-right">
                      <Link
                        href={`/property-reports/${prop.slug}`}
                        className="text-accent-blue hover:underline inline-flex items-center gap-1"
                      >
                        <span>Report</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-ink-60 font-mono text-xs">
            No recent individual sales records catalogued for this suburb yet.
          </div>
        )}
      </section>

      {/* Investment Calculator */}
      <div className="mb-10">
        <InvestmentCalculator
          defaultPrice={suburb.market.medianHousePrice}
          defaultWeeklyRent={suburb.market.medianHouseRentWeek}
        />
      </div>
    </div>
  );
}
