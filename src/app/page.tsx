import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Database, Layers, MapPin, Building, GraduationCap, ChevronRight } from "lucide-react";
import HeroSearch from "../components/HeroSearch";
import SuburbCard from "../components/SuburbCard";
import InteractiveMap from "../components/InteractiveMap";
import { SUBURBS_DATABASE } from "../lib/data/suburbsData";
import { formatCurrency, formatPercent } from "../lib/utils";

export default function HomePage() {
  const featuredSuburbs = SUBURBS_DATABASE.slice(0, 6);

  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 lg:px-12 max-w-[1440px] mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-ink-10 mb-6 shadow-subtle">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
          <span className="eyebrow-mono text-xs">/the property intelligence engine for australia</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#3c3a39] max-w-4xl leading-[1.08] mb-6">
          Street-Level Property Data &amp; Growth Forecasting.
        </h1>

        <p className="text-base sm:text-lg text-ink-60 max-w-2xl leading-relaxed mb-10">
          Reverse-engineered analytics synthesizing 25 years of settlement records, G-NAF address matching, ABS Census demographics, school catchments, and statutory planning registers across all Australian states.
        </p>

        {/* Hero Interactive Search Bar */}
        <HeroSearch />

        {/* Live Macro Metrics Ticker */}
        <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#fffcf6] border border-ink-10 rounded-2xl shadow-subtle text-left">
          <div className="p-3">
            <span className="eyebrow-mono text-[11px] block mb-1">/coverage</span>
            <span className="text-2xl font-bold font-mono text-[#3c3a39]">15,400+</span>
            <span className="text-xs text-ink-60 block mt-0.5">Australian Suburbs Mapped</span>
          </div>
          <div className="p-3">
            <span className="eyebrow-mono text-[11px] block mb-1">/transactions</span>
            <span className="text-2xl font-bold font-mono text-[#3c3a39]">28.4M</span>
            <span className="text-xs text-ink-60 block mt-0.5">Historical Settlement Records</span>
          </div>
          <div className="p-3">
            <span className="eyebrow-mono text-[11px] block mb-1">/resolution</span>
            <span className="text-2xl font-bold font-mono text-accent-blue">99.8%</span>
            <span className="text-xs text-ink-60 block mt-0.5">G-NAF Geocoding Accuracy</span>
          </div>
          <div className="p-3">
            <span className="eyebrow-mono text-[11px] block mb-1">/query speed</span>
            <span className="text-2xl font-bold font-mono text-accent-emerald">&lt;24ms</span>
            <span className="text-xs text-ink-60 block mt-0.5">Real-Time Analytics Engine</span>
          </div>
        </div>
      </section>

      {/* Live Interactive Spatial GIS Map Showcase */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="card-editorial p-6 lg:p-8 bg-[#fffcf6]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow-mono text-xs">/live spatial map preview</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3c3a39] tracking-tight">
                Street-Level Australian Spatial Intelligence Map
              </h2>
              <p className="text-xs text-ink-60 mt-1">
                Explore mesh-block pocket medians, municipal boundaries, and neighbouring suburb values in real-time.
              </p>
            </div>
            <Link
              href="/suburb-finder"
              className="btn-pill-dark text-xs py-2 px-4 shrink-0"
            >
              <span>Explore All 586 Suburbs on Map</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {featuredSuburbs.length > 0 && (
            <InteractiveMap
              center={featuredSuburbs[0].coordinates}
              zoom={14}
              suburbName={featuredSuburbs[0].name}
              state={featuredSuburbs[0].state}
              postcode={featuredSuburbs[0].postcode}
              medianHousePrice={featuredSuburbs[0].market.medianHousePrice}
              capitalGrowth12MoPct={featuredSuburbs[0].market.capitalGrowth12MoPct}
              grossYieldPct={featuredSuburbs[0].market.grossHouseYieldPct}
              overallScore={featuredSuburbs[0].scores.overallScore}
              schools={featuredSuburbs[0].schools}
              hazardRisk={featuredSuburbs[0].hazards.floodRisk}
              activeDaCount={featuredSuburbs[0].planning.activeDaCount}
              surroundingSuburbs={featuredSuburbs[0].surroundingSuburbs}
              height="480px"
            />
          )}
        </div>
      </section>

      {/* Featured Suburbs Grid */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow-mono text-xs">/live market intelligence</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3c3a39] tracking-tight">
              High-Conviction Investment Suburbs
            </h2>
            <p className="text-sm text-ink-60 mt-1">
              Top performing metropolitan and coastal sub-markets evaluated by the Prop Mark algorithm.
            </p>
          </div>
          <Link
            href="/suburb-finder"
            className="btn-pill-ghost text-xs group"
          >
            <span>Explore All 15,000+ Suburbs</span>
            <ChevronRight className="w-3.5 h-3.5 shift-arrow transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSuburbs.map((suburb) => (
            <SuburbCard key={suburb.id} suburb={suburb} />
          ))}
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow-mono text-xs">/under the hood</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3c3a39] tracking-tight mb-2">
            Multi-Source Real Estate Reverse Engineering
          </h2>
          <p className="text-sm text-ink-60">
            Prop Mark eliminates single-source bias by aggregating and cross-verifying data from Australia's premier authoritative registries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-editorial p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-accent-blue mb-4">
                <Database className="w-5 h-5" />
              </div>
              <span className="eyebrow-mono text-xs">/valuation engine</span>
              <h3 className="text-lg font-bold text-[#3c3a39] mt-1 mb-2">
                Automated Valuation Model (AVM)
              </h3>
              <p className="text-xs text-ink-60 leading-relaxed">
                Hedonic regression modeling factoring repeat sales indices, physical attributes (bedrooms, land area, parking), and hyper-local mesh-block adjustments.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-ink-10 flex items-center justify-between text-xs">
              <span className="font-mono text-ink-60">Confidence Bands</span>
              <span className="font-mono font-bold text-accent-blue">Up to 96% Acc.</span>
            </div>
          </div>

          <div className="card-editorial p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-accent-orange mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="eyebrow-mono text-xs">/due diligence</span>
              <h3 className="text-lg font-bold text-[#3c3a39] mt-1 mb-2">
                Environmental &amp; Civic Hazards
              </h3>
              <p className="text-xs text-ink-60 leading-relaxed">
                Direct integration with state SES flood mapping, RFS bushfire vegetation buffers, flight path ANEF contours, and ABS SA1 public housing density.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-ink-10 flex items-center justify-between text-xs">
              <span className="font-mono text-ink-60">Risk Overlays</span>
              <span className="font-mono font-bold text-accent-orange">6 Hazard Layers</span>
            </div>
          </div>

          <div className="card-editorial p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-accent-emerald mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <span className="eyebrow-mono text-xs">/statutory planning</span>
              <h3 className="text-lg font-bold text-[#3c3a39] mt-1 mb-2">
                Council DAs &amp; LEP Zoning
              </h3>
              <p className="text-xs text-ink-60 leading-relaxed">
                Track active development applications, proposed apartment towers, rezoning amendments, and incoming commercial infrastructure capital expenditure.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-ink-10 flex items-center justify-between text-xs">
              <span className="font-mono text-ink-60">Update Frequency</span>
              <span className="font-mono font-bold text-accent-emerald">Weekly Crawl</span>
            </div>
          </div>
        </div>
      </section>

      {/* Suburb Comparison Showcase */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="card-editorial p-8 lg:p-12 bg-[#3c3a39] text-[#fffcf6] border-none shadow-float rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-xs text-accent-aqua uppercase tracking-widest block mb-2">
                // HEAD-TO-HEAD MARKET INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#fffcf6] mb-4">
                Compare Up to 3 Australian Suburbs Simultaneously.
              </h2>
              <p className="text-sm text-[#fffcf6cc] leading-relaxed mb-6">
                Evaluate capital growth trajectories, rental yields, ABS Census demographics, school catchments, and environmental hazards side-by-side to make high-conviction property decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/compare"
                  className="btn-pill-dark bg-[#fffcf6] text-[#3c3a39] hover:bg-white text-xs font-semibold py-2.5 px-5"
                >
                  <span>Launch Comparison Engine</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/suburb-finder"
                  className="btn-pill-ghost text-[#fffcf6] border-[#fffcf640] hover:bg-[#fffcf61a] text-xs py-2.5 px-5"
                >
                  Filter 585 Suburbs
                </Link>
              </div>
            </div>

            <div className="bg-[#1e1e1e] p-5 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto text-[#f7f7f5] space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px]">
                <span>COMPARISON ENGINE SNAPSHOT</span>
                <span>propmark.com.au/compare</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] pt-1 border-b border-white/10 pb-3">
                <div>
                  <span className="text-white/40 block">Metric</span>
                  <span className="font-bold text-white">Median Price</span>
                  <span className="text-white/70 block">Yield</span>
                  <span className="text-white/70 block">12M Growth</span>
                </div>
                <div>
                  <span className="text-accent-aqua block font-bold">Bondi Beach</span>
                  <span className="text-white">$4.52M</span>
                  <span className="text-white">2.2%</span>
                  <span className="text-accent-emerald">+3.2%</span>
                </div>
                <div>
                  <span className="text-accent-lavender block font-bold">Chatswood</span>
                  <span className="text-white">$3.30M</span>
                  <span className="text-white">2.2%</span>
                  <span className="text-accent-red">-2.2%</span>
                </div>
              </div>
              <div className="text-[11px] text-accent-emerald flex items-center justify-between pt-1">
                <span>Automated Winner: Bondi Beach (Capital Growth &amp; Livability)</span>
                <span>Score: 74/100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto w-full text-center">
        <div className="p-10 bg-surface border border-ink-10 rounded-2xl flex flex-col items-center">
          <span className="eyebrow-mono text-xs mb-2">/start research</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3c3a39] mb-3">
            Ready to find your next winning property?
          </h2>
          <p className="text-sm text-ink-60 max-w-xl mb-6">
            Join thousands of smart property investors, buyer&apos;s agents, and developers who rely on Prop Mark daily.
          </p>
          <div className="flex gap-3">
            <Link href="/suburb-finder" className="btn-pill-dark text-xs py-2.5 px-6">
              Launch Suburb Screener
            </Link>
            <Link href="/pricing" className="btn-pill-ghost text-xs py-2.5 px-6">
              View Plans &amp; Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
