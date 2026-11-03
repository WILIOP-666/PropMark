"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bed, Bath, Car, ArrowUpRight, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { PROPERTIES_DATABASE } from "../../lib/data/propertiesData";
import { formatCurrency, formatPercent } from "../../lib/utils";

export default function PropertyFinderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState<string>("ALL");
  const [minBeds, setMinBeds] = useState<number>(0);

  const filteredProperties = PROPERTIES_DATABASE.filter((p) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.address.toLowerCase().includes(q) ||
        p.suburb.toLowerCase().includes(q) ||
        p.postcode.includes(q);
      if (!match) return false;
    }
    if (propertyType !== "ALL" && p.propertyType !== propertyType) return false;
    if (p.bedrooms < minBeds) return false;
    return true;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="mb-8">
        <span className="eyebrow-mono text-xs">/property database & avm</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
          Australian Property Valuation &amp; CMA Explorer
        </h1>
        <p className="text-sm text-ink-60 max-w-2xl">
          Inspect individual dwelling valuation estimates, hedonic confidence intervals, floor areas, council zoning, and rental yield projections.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="card-editorial p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1.5">
              Street Address / Suburb / Postcode
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-ink-40 absolute left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. 142 Bourke St, Surry Hills..."
                className="w-full bg-surface-light border border-ink-15 rounded-xl pl-9 pr-3 py-2 text-sm text-ink focus:outline-none focus:border-ink-80"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1.5">Property Type</label>
            <div className="flex gap-2">
              {["ALL", "House", "Unit", "Townhouse"].map((t) => (
                <button
                  key={t}
                  onClick={() => setPropertyType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    propertyType === t
                      ? "bg-[#3c3a39] text-[#fefefe]"
                      : "bg-surface-light border border-ink-10 text-ink-80 hover:bg-ink-10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1.5">
              Minimum Bedrooms: {minBeds > 0 ? `${minBeds}+ beds` : "Any"}
            </label>
            <div className="flex gap-2">
              {[0, 2, 3, 4, 5].map((b) => (
                <button
                  key={b}
                  onClick={() => setMinBeds(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    minBeds === b
                      ? "bg-[#3c3a39] text-[#fefefe]"
                      : "bg-surface-light border border-ink-10 text-ink-80 hover:bg-ink-10"
                  }`}
                >
                  {b === 0 ? "Any" : `${b}+`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((prop) => (
          <div key={prop.id} className="card-editorial p-0 overflow-hidden flex flex-col justify-between group hover:border-ink-40 transition-all">
            <div>
              {/* Property Image Cover */}
              <div className="relative h-48 w-full bg-ink-10 overflow-hidden">
                <img
                  src={prop.imageUrl}
                  alt={prop.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#fffcf6ee] backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-mono font-bold text-ink">
                  {prop.propertyType}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-50 text-accent-emerald border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AVM {prop.confidenceScore}%</span>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-5">
                <span className="eyebrow-mono text-xs block mb-1">
                  /{prop.suburb} • {prop.postcode}
                </span>
                <h3 className="text-lg font-bold text-ink mb-1">
                  {prop.address}
                </h3>
                <p className="text-xs text-ink-60 mb-4">
                  {prop.councilLga} • Built {prop.yearBuilt} • {prop.landAreaSqm} m² land
                </p>

                {/* Specs row */}
                <div className="flex items-center gap-4 text-xs font-mono text-ink-80 py-2.5 border-y border-ink-10 mb-4 bg-surface-light px-3 rounded-lg">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-ink-60" />
                    {prop.bedrooms} Bed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-3.5 h-3.5 text-ink-60" />
                    {prop.bathrooms} Bath
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-ink-60" />
                    {prop.carSpaces} Car
                  </span>
                </div>

                {/* Valuation numbers */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-ink-60">Automated Valuation (AVM)</span>
                    <span className="font-mono font-bold text-base text-ink">
                      {formatCurrency(prop.avmValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-ink-40 font-mono">
                    <span>Estimated Valuation Range</span>
                    <span>
                      {formatCurrency(prop.estimatedValueMin)} - {formatCurrency(prop.estimatedValueMax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-ink-5">
                    <span className="text-ink-60">Estimated Rent / Yield</span>
                    <span className="font-mono font-medium text-accent-emerald">
                      ${prop.rentalEstimateWeekly}/wk ({prop.grossYieldPct}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-5 pt-0">
              <Link
                href={`/property-reports/${prop.slug}`}
                className="btn-pill-dark w-full text-xs py-2.5 justify-center"
              >
                <span>Full Property Due Diligence</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
