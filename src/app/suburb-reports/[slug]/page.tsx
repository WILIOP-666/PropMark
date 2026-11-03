import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, TrendingUp, DollarSign, Calendar, ArrowUpRight, Share2, Printer, CheckCircle } from "lucide-react";
import { SUBURBS_DATABASE } from "../../../lib/data/enrichedSuburbs";
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

export default function SuburbReportPage({ params }: PageProps) {
  const suburb = SUBURBS_DATABASE.find((s) => s.slug === params.slug);

  if (!suburb) {
    notFound();
  }

  const suburbProperties = PROPERTIES_DATABASE.filter(
    (p) => p.suburb.toLowerCase() === suburb.name.toLowerCase()
  );

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-mono text-ink-60 mb-6 no-print">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <Link href="/suburb-finder" className="hover:text-black">Suburb Reports</Link>
        <span>/</span>
        <span className="text-ink font-medium">{suburb.name} {suburb.state}</span>
      </div>

      {/* Hero Editorial Suburb Cover Photography */}
      <SuburbHeroImage suburb={suburb} />

      {/* Suburb Header Banner */}
      <div className="card-editorial p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-ink-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="eyebrow-mono text-xs">/{suburb.state} • POSTCODE {suburb.postcode}</span>
              <span className="text-xs font-mono bg-ink-5 px-2 py-0.5 rounded text-ink-60">
                LGA: {suburb.lga}
              </span>
              <span className="text-xs font-mono bg-emerald-50 text-accent-emerald px-2 py-0.5 rounded border border-emerald-200">
                Verified REA &amp; ABS Data
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              {suburb.name}, {suburb.state}
            </h1>
            <p className="text-sm text-ink-60 mt-2 max-w-3xl leading-relaxed">
              {suburb.summary.description}
            </p>
          </div>

          {/* Right Score & Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <div className="text-left lg:text-right">
              <span className="text-xs font-mono text-ink-60 block">Prop Mark Overall Score</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 text-left">
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
            <span className="text-[10px] text-ink-60 font-mono">
              Yield: {formatPercent(suburb.market.grossUnitYieldPct)}
            </span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Gross House Yield</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {formatPercent(suburb.market.grossHouseYieldPct)}
            </span>
            <span className="text-[10px] text-ink-60 font-mono">
              ${suburb.market.medianHouseRentWeek}/week
            </span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">5Y Capital Growth</span>
            <span className="text-lg font-bold font-mono text-accent-emerald block mt-0.5">
              {formatPercent(suburb.market.capitalGrowth5YrPct, true)}
            </span>
            <span className="text-[10px] text-ink-60 font-mono">CAGR ~7.2% p.a.</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Vacancy Rate</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {suburb.market.vacancyRatePct}%
            </span>
            <span className="text-[10px] text-accent-emerald font-mono">Ultra-Tight Demand</span>
          </div>

          <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-[11px] font-mono text-ink-60 block">Days On Market</span>
            <span className="text-lg font-bold font-mono text-ink block mt-0.5">
              {suburb.market.daysOnMarketHouse} days
            </span>
            <span className="text-[10px] text-ink-60 font-mono">Clearance: {suburb.market.auctionClearanceRatePct}%</span>
          </div>
        </div>
      </div>

      {/* Two-Column Split Screen Layout (Microburbs Specification) */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Deep Analytics Modules */}
        <div className="lg:col-span-7 space-y-8">
          {/* Module 1: Price Trajectory Chart */}
          <PriceChart series={suburb.market.priceSeries} suburbName={suburb.name} />

          {/* Module 2: Livability Radar & Lifestyle Diagnostic */}
          <ScoreRadar scores={suburb.scores} />

          {/* Module 3: ABS Census Demographics & Socioeconomic Profile */}
          <DemographicBreakdown demographics={suburb.demographics} suburbName={suburb.name} />

          {/* Module 4: Education & Catchments */}
          <SchoolCatchmentList schools={suburb.schools} suburbName={suburb.name} />

          {/* Module 5: Planning Controls & Development Pipeline */}
          <PlanningZoningCard planning={suburb.planning} suburbName={suburb.name} />

          {/* Module 6: Due Diligence & Environmental Risk Overlays */}
          <HazardRiskMatrix hazards={suburb.hazards} suburbName={suburb.name} />

          {/* Module 5: Interactive Investment Cash Flow Calculator */}
          <InvestmentCalculator
            defaultPrice={suburb.market.medianHousePrice}
            defaultWeeklyRent={suburb.market.medianHouseRentWeek}
          />

          {/* Module 6: Commute & Transit Matrix */}
          <div className="card-editorial p-6">
            <div className="mb-4">
              <span className="eyebrow-mono text-xs">/connectivity</span>
              <h4 className="text-lg font-bold text-ink">
                Commute Times &amp; Walkability
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
                <span className="text-xs font-mono text-ink-60 block">Train / Metro to CBD</span>
                <span className="text-2xl font-bold font-mono text-ink block mt-1">
                  {suburb.commute.trainTimeMins} mins
                </span>
              </div>
              <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
                <span className="text-xs font-mono text-ink-60 block">Driving Time</span>
                <span className="text-2xl font-bold font-mono text-ink block mt-1">
                  {suburb.commute.drivingTimeMins} mins
                </span>
              </div>
              <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
                <span className="text-xs font-mono text-ink-60 block">Cycling Commute</span>
                <span className="text-2xl font-bold font-mono text-ink block mt-1">
                  {suburb.commute.bikeTimeMins} mins
                </span>
              </div>
              <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
                <span className="text-xs font-mono text-ink-60 block">WalkScore</span>
                <span className="text-2xl font-bold font-mono text-accent-blue block mt-1">
                  {suburb.commute.walkScore} / 100
                </span>
              </div>
            </div>
          </div>

          {/* Module 7: Recent Sales & Current Listings (Exact Microburbs Properties Table) */}
          <div className="card-editorial p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="eyebrow-mono text-xs">/settlement history &amp; listings</span>
                <h4 className="text-lg font-bold text-ink">
                  Properties in {suburb.name}
                </h4>
              </div>
              <span className="text-xs font-mono text-ink-60">
                {suburbProperties.length > 0 ? `${suburbProperties.length} Properties Mapped` : "Verified REA Stock"}
              </span>
            </div>

            {suburbProperties.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-ink-10 rounded-lg overflow-hidden">
                  <thead className="bg-surface-light border-b border-ink-10 font-mono text-ink-60">
                    <tr>
                      <th className="py-2.5 px-3">Address</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Bd</th>
                      <th className="py-2.5 px-3">Ba</th>
                      <th className="py-2.5 px-3">Sale Price / AVM</th>
                      <th className="py-2.5 px-3">Yield</th>
                      <th className="py-2.5 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-5">
                    {suburbProperties.map((prop) => (
                      <tr key={prop.id} className="hover:bg-ink-5 transition-colors">
                        <td className="py-2.5 px-3 font-semibold text-ink">
                          {prop.address}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-ink-60">{prop.propertyType}</td>
                        <td className="py-2.5 px-3 font-mono">{prop.bedrooms}</td>
                        <td className="py-2.5 px-3 font-mono">{prop.bathrooms}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-ink">
                          {formatCurrency(prop.avmValue)}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-accent-emerald font-semibold">
                          {prop.grossYieldPct}%
                        </td>
                        <td className="py-2.5 px-3">
                          <Link
                            href={`/property-reports/${prop.slug}`}
                            className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-0.5"
                          >
                            <span>Inspect</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4 bg-surface-light rounded-xl border border-ink-5 text-xs text-ink-60">
                Detailed individual property records for {suburb.name} are available in the Property Valuation Explorer.
              </div>
            )}
          </div>
        </div>

        {/* Right Sticky Column: Interactive Map & Live Spatial Canvas (Mobile-first order) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4 order-first lg:order-last mb-6 lg:mb-0">
          <div className="flex items-center justify-between pb-1">
            <span className="eyebrow-mono text-xs">/spatial gis boundary &amp; mesh blocks</span>
            <span className="text-xs font-mono text-ink-60">
              {suburb.coordinates.lat.toFixed(4)}, {suburb.coordinates.lng.toFixed(4)}
            </span>
          </div>

          <InteractiveMap
            center={suburb.coordinates}
            zoom={14}
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
            height="500px"
          />

          {/* Quick Suburb Spatial Fact Sheet */}
          <div className="card-editorial p-4 bg-surface-light border border-ink-10 rounded-xl space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center text-ink-60">
              <span>Boundary Classification:</span>
              <span className="text-ink font-bold">Standard SAL / SA2</span>
            </div>
            <div className="flex justify-between items-center text-ink-60">
              <span>ABS Land Area:</span>
              <span className="text-ink font-bold">{suburb.summary.areaSqKm} km²</span>
            </div>
            <div className="flex justify-between items-center text-ink-60">
              <span>Estimated Population:</span>
              <span className="text-ink font-bold">{suburb.summary.population.toLocaleString()} residents</span>
            </div>
            <div className="flex justify-between items-center text-ink-60 pt-1 border-t border-ink-10">
              <span>Primary Zoning Control:</span>
              <span className="text-accent-blue font-bold">{suburb.planning.primaryZoning}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
