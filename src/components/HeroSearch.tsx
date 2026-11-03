"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { SUBURBS_DATABASE } from "../lib/data/enrichedSuburbs";
import { formatCurrency, formatPercent } from "../lib/utils";

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuburbs = query.trim()
    ? SUBURBS_DATABASE.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.postcode.includes(query) ||
          s.lga.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSelect = (slug: string) => {
    router.push(`/suburb-reports/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filteredSuburbs.length > 0) {
      handleSelect(filteredSuburbs[0].slug);
    }
  };

  return (
    <div className="w-full max-w-3xl relative">
      <div
        className={`relative flex items-center bg-[#fffcf6] border rounded-full transition-all duration-200 px-4 py-2 shadow-subtle ${
          isFocused ? "border-ink-80 ring-2 ring-ink-10 shadow-float" : "border-ink-20 hover:border-ink-40"
        }`}
      >
        <div className="pl-2 pr-3 text-ink-40">
          <Search className="w-5 h-5 text-[#3c3a39]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 250)}
          onKeyDown={handleKeyDown}
          placeholder="Search any Australian suburb, postcode, or LGA (e.g. Surry Hills, 2026, Richmond)..."
          className="w-full bg-transparent py-2.5 text-base text-[#3c3a39] placeholder-ink-40 focus:outline-none font-sans"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="px-2 text-xs font-mono text-ink-40 hover:text-ink-80"
          >
            Clear
          </button>
        )}
        <button
          onClick={() => {
            if (filteredSuburbs.length > 0) handleSelect(filteredSuburbs[0].slug);
            else router.push(`/suburb-finder?q=${encodeURIComponent(query)}`);
          }}
          className="btn-pill-dark ml-2 py-2 px-5 text-xs font-medium shrink-0"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Autocomplete Dropdown */}
      {isFocused && filteredSuburbs.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-[#fffcf6] border border-ink-15 rounded-2xl shadow-float z-50 overflow-hidden divide-y divide-ink-5">
          <div className="px-4 py-2 bg-surface-light text-[11px] font-mono text-ink-60 uppercase tracking-wider">
            Matching Suburbs ({filteredSuburbs.length})
          </div>
          {filteredSuburbs.map((suburb) => (
            <div
              key={suburb.id}
              onClick={() => handleSelect(suburb.slug)}
              className="px-5 py-3 hover:bg-ink-5 cursor-pointer flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-ink-5 flex items-center justify-center text-ink-60 group-hover:bg-ink-10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#3c3a39] flex items-center gap-2">
                    <span>{suburb.name}, {suburb.state}</span>
                    <span className="font-mono text-xs text-ink-60 bg-ink-5 px-1.5 py-0.5 rounded">
                      {suburb.postcode}
                    </span>
                  </div>
                  <div className="text-xs text-ink-60">
                    {suburb.lga} • {suburb.summary.distanceToCbdKm}km to CBD
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono font-medium text-ink-80">
                  Median: {formatCurrency(suburb.market.medianHousePrice)}
                </div>
                <div className="text-[11px] text-accent-emerald flex items-center justify-end gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{formatPercent(suburb.market.capitalGrowth12MoPct, true)} (12m)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Discovery Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="eyebrow-mono text-xs">/trending:</span>
        {[
          { name: "Surry Hills NSW", slug: "surry-hills-nsw-2010" },
          { name: "Bondi NSW", slug: "bondi-nsw-2026" },
          { name: "Richmond VIC", slug: "richmond-vic-3121" },
          { name: "New Farm QLD", slug: "new-farm-qld-4005" },
          { name: "Fremantle WA", slug: "fremantle-wa-6160" },
          { name: "Norwood SA", slug: "norwood-sa-5067" },
        ].map((item) => (
          <button
            key={item.slug}
            onClick={() => handleSelect(item.slug)}
            className="text-xs font-medium text-ink-80 bg-[#fffcf6] hover:bg-ink-10 border border-ink-15 px-3 py-1 rounded-full transition-colors flex items-center gap-1"
          >
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
