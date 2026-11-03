import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  ShieldCheck,
  MapPin,
  Building,
  Calendar,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Waves,
  Flame,
  Volume2
} from "lucide-react";
import { PROPERTIES_DATABASE } from "../../../lib/data/propertiesData";
import { SUBURBS_DATABASE } from "../../../lib/data/suburbsData";
import { formatCurrency, formatPercent } from "../../../lib/utils";
import InvestmentCalculator from "../../../components/InvestmentCalculator";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  PROPERTIES_DATABASE.forEach((p) => {
    paths.push({ slug: p.slug });
    if (p.id) paths.push({ slug: p.id });
  });
  return paths;
}

export default function PropertyReportDetailPage({ params }: PageProps) {
  const property = PROPERTIES_DATABASE.find(
    (p) =>
      p.slug.toLowerCase() === params.slug.toLowerCase() ||
      p.id.toLowerCase() === params.slug.toLowerCase()
  );

  if (!property) {
    notFound();
  }

  const parentSuburb = SUBURBS_DATABASE.find(
    (s) => s.name.toLowerCase() === property.suburb.toLowerCase()
  );

  const comparables = PROPERTIES_DATABASE.filter(
    (p) =>
      p.suburb.toLowerCase() === property.suburb.toLowerCase() &&
      p.id !== property.id
  ).slice(0, 3);

  const capitalGainAmount = property.avmValue - property.lastSalePrice;
  const capitalGainPct = property.lastSalePrice > 0
    ? ((capitalGainAmount / property.lastSalePrice) * 100).toFixed(1)
    : "0.0";

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-mono text-ink-60 mb-6">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <Link href="/property-finder" className="hover:text-black">Properties</Link>
        <span>/</span>
        {parentSuburb && (
          <>
            <Link href={`/suburb-reports/${parentSuburb.slug}`} className="hover:text-black">
              {parentSuburb.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-ink font-medium">{property.address}</span>
      </div>

      {/* Main Property Overview Card */}
      <div className="card-editorial p-6 lg:p-8 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image & Gallery */}
          <div className="space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-ink-10 border border-ink-10 shadow-sm">
              <img
                src={property.imageUrl}
                alt={property.address}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-bold text-ink border border-ink-10">
                {property.propertyType}
              </div>
              <div className="absolute top-4 right-4 bg-emerald-50 text-accent-emerald border border-emerald-200 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>AVM Confidence: {property.confidenceScore}%</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono">
                G-NAF: {property.id}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Bedrooms</span>
                <span className="font-bold text-ink text-sm">{property.bedrooms} Bed</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Bathrooms</span>
                <span className="font-bold text-ink text-sm">{property.bathrooms} Bath</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Parking</span>
                <span className="font-bold text-ink text-sm">{property.carSpaces} Car</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Land Area</span>
                <span className="font-bold text-ink text-sm">{property.landAreaSqm} m²</span>
              </div>
            </div>
          </div>

          {/* Details & Valuation Summary */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="eyebrow-mono text-xs">/{property.suburb} • POSTCODE {property.postcode}</span>
                <span className="text-xs font-mono bg-ink-5 px-2 py-0.5 rounded text-ink-60">
                  {property.councilLga}
                </span>
                <span className="text-xs font-mono bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded">
                  Title: Torrens Freehold
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                {property.address}
              </h1>
              <p className="text-xs text-ink-60 mt-1">
                Zoning: {property.zoningCode} • Year Built: {property.yearBuilt} • Building Floor Area: {property.buildingAreaSqm} m²
              </p>
            </div>

            {/* Valuation Box */}
            <div className="p-5 bg-surface-light rounded-xl border border-ink-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-ink-60 uppercase tracking-wider block">
                  Automated Valuation Model (AVM)
                </span>
                <span className="text-[10px] font-mono bg-emerald-50 text-accent-emerald border border-emerald-200 px-2 py-0.5 rounded">
                  Valued as of Today
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-ink">
                  {formatCurrency(property.avmValue)}
                </span>
                <span className="text-xs font-mono text-accent-emerald font-semibold">
                  (High Confidence {property.confidenceScore}%)
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-ink-60 pt-2 border-t border-ink-10">
                <span>Estimated Value Range</span>
                <span className="text-ink font-medium">
                  {formatCurrency(property.estimatedValueMin)} — {formatCurrency(property.estimatedValueMax)}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-ink-60">
                <span>Last Settlement Price</span>
                <span className="text-ink font-medium">
                  {formatCurrency(property.lastSalePrice)} ({property.lastSaleDate})
                </span>
              </div>
              {capitalGainAmount > 0 && (
                <div className="flex justify-between items-center text-xs font-mono text-ink-60">
                  <span>Gross Capital Gain</span>
                  <span className="text-accent-emerald font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +{formatCurrency(capitalGainAmount)} (+{capitalGainPct}%)
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs font-mono text-ink-60">
                <span>Estimated Weekly Rent</span>
                <span className="text-accent-emerald font-medium">
                  ${property.rentalEstimateWeekly}/wk (~{property.grossYieldPct}% gross yield)
                </span>
              </div>
            </div>

            {/* Site Due Diligence Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-surface rounded-lg border border-ink-10 flex items-center gap-2">
                <Waves className="w-4 h-4 text-accent-blue shrink-0" />
                <div>
                  <span className="text-[10px] text-ink-40 block">Flood Model</span>
                  <span className="font-bold text-accent-emerald">Low Exposure</span>
                </div>
              </div>
              <div className="p-2.5 bg-surface rounded-lg border border-ink-10 flex items-center gap-2">
                <Flame className="w-4 h-4 text-accent-orange shrink-0" />
                <div>
                  <span className="text-[10px] text-ink-40 block">Bushfire BAL</span>
                  <span className="font-bold text-accent-emerald">BAL-LOW</span>
                </div>
              </div>
              <div className="p-2.5 bg-surface rounded-lg border border-ink-10 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-accent-gold shrink-0" />
                <div>
                  <span className="text-[10px] text-ink-40 block">Noise ANEF</span>
                  <span className="font-bold text-ink">&lt;20 Contour</span>
                </div>
              </div>
            </div>

            {/* Architectural Features */}
            <div>
              <h4 className="text-xs font-mono text-ink-60 uppercase tracking-wider mb-2">
                Property Key Highlights &amp; Inclusions
              </h4>
              <ul className="space-y-1.5 text-xs text-ink-80">
                {property.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Suburb Link */}
            {parentSuburb && (
              <div className="pt-2">
                <Link
                  href={`/suburb-reports/${parentSuburb.slug}`}
                  className="btn-editorial-secondary inline-flex items-center gap-2 text-xs"
                >
                  <span>Explore Full {parentSuburb.name} Suburb Analytics &amp; Demographics</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparable Market Sales (CMA) */}
      {comparables.length > 0 && (
        <div className="card-editorial p-6 mb-10">
          <div className="mb-4">
            <span className="eyebrow-mono text-xs">/comparative market analysis</span>
            <h3 className="text-lg font-bold text-ink">
              Recent Comparable Sales in {property.suburb}
            </h3>
            <p className="text-xs text-ink-60 mt-0.5">
              Nearest-neighbour transactions with verified settlement prices and attributes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparables.map((comp) => (
              <Link
                key={comp.id}
                href={`/property-reports/${comp.slug}`}
                className="p-4 bg-surface-light rounded-xl border border-ink-5 hover:border-ink-40 transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-ink-60 mb-2">
                  <span>Sold {comp.lastSaleDate}</span>
                  <span className="font-bold text-ink">{comp.propertyType}</span>
                </div>
                <h4 className="font-bold text-ink text-sm group-hover:text-accent-blue transition-colors truncate">
                  {comp.address}
                </h4>
                <div className="text-lg font-bold font-mono text-ink mt-1">
                  {formatCurrency(comp.lastSalePrice)}
                </div>
                <div className="flex items-center gap-3 text-xs text-ink-60 font-mono mt-2 pt-2 border-t border-ink-5">
                  <span>{comp.bedrooms} bed</span>
                  <span>{comp.bathrooms} bath</span>
                  <span>{comp.carSpaces} car</span>
                  <span>{comp.landAreaSqm} m²</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Investment Calculator Section */}
      <div className="mb-10">
        <InvestmentCalculator
          defaultPrice={property.avmValue}
          defaultWeeklyRent={property.rentalEstimateWeekly}
        />
      </div>
    </div>
  );
}
