import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bed, Bath, Car, ShieldCheck, MapPin, Building, Calendar, DollarSign, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROPERTIES_DATABASE } from "../../../lib/data/propertiesData";
import { formatCurrency, formatPercent } from "../../../lib/utils";
import InvestmentCalculator from "../../../components/InvestmentCalculator";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROPERTIES_DATABASE.map((p) => ({
    slug: p.slug,
  }));
}

export default function PropertyReportDetailPage({ params }: PageProps) {
  const property = PROPERTIES_DATABASE.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-mono text-ink-60 mb-6">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <Link href="/property-finder" className="hover:text-black">Properties</Link>
        <span>/</span>
        <span className="text-[#3c3a39] font-medium">{property.address}</span>
      </div>

      {/* Main Property Overview Card */}
      <div className="card-editorial p-6 lg:p-8 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image & Gallery */}
          <div className="space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-ink-10 border border-ink-10">
              <img
                src={property.imageUrl}
                alt={property.address}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#fffcf6ee] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-bold text-[#3c3a39]">
                {property.propertyType}
              </div>
              <div className="absolute top-4 right-4 bg-emerald-50 text-accent-emerald border border-emerald-200 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>AVM Confidence: {property.confidenceScore}%</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Bedrooms</span>
                <span className="font-bold text-[#3c3a39] text-sm">{property.bedrooms}</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Bathrooms</span>
                <span className="font-bold text-[#3c3a39] text-sm">{property.bathrooms}</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Parking</span>
                <span className="font-bold text-[#3c3a39] text-sm">{property.carSpaces}</span>
              </div>
              <div className="p-2.5 bg-surface-light rounded-lg border border-ink-5">
                <span className="text-ink-40 block text-[10px]">Land Area</span>
                <span className="font-bold text-[#3c3a39] text-sm">{property.landAreaSqm} m²</span>
              </div>
            </div>
          </div>

          {/* Details & Valuation Summary */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="eyebrow-mono text-xs">/{property.suburb} • {property.postcode}</span>
                <span className="text-xs font-mono bg-ink-5 px-2 py-0.5 rounded text-ink-60">
                  {property.councilLga}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#3c3a39] tracking-tight">
                {property.address}
              </h1>
              <p className="text-xs text-ink-60 mt-1">
                Zoning: {property.zoningCode} • Year Built: {property.yearBuilt} • Building Floor Area: {property.buildingAreaSqm} m²
              </p>
            </div>

            {/* Valuation Box */}
            <div className="p-5 bg-surface-light rounded-xl border border-ink-10 space-y-3">
              <span className="text-xs font-mono text-ink-60 uppercase tracking-wider block">
                Automated Valuation Model (AVM)
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-[#3c3a39]">
                  {formatCurrency(property.avmValue)}
                </span>
                <span className="text-xs font-mono text-accent-emerald font-semibold">
                  (High Confidence)
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-ink-60 pt-2 border-t border-ink-10">
                <span>Estimated Value Range</span>
                <span className="text-[#3c3a39] font-medium">
                  {formatCurrency(property.estimatedValueMin)} — {formatCurrency(property.estimatedValueMax)}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-ink-60">
                <span>Last Settlement Price</span>
                <span className="text-[#3c3a39] font-medium">
                  {formatCurrency(property.lastSalePrice)} ({property.lastSaleDate})
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-ink-60">
                <span>Rental Appraisal</span>
                <span className="text-accent-emerald font-medium">
                  ${property.rentalEstimateWeekly}/wk (~{property.grossYieldPct}% yield)
                </span>
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
          </div>
        </div>
      </div>

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
