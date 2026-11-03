"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, ArrowUpRight, TrendingUp, SlidersHorizontal, MapPin } from "lucide-react";
import { SUBURBS_DATABASE } from "../../lib/data/enrichedSuburbs";
import { formatCurrency, formatPercent, getScoreColor } from "../../lib/utils";
import SuburbCard from "../../components/SuburbCard";
import MultiSuburbMap from "../../components/MultiSuburbMap";

export default function SuburbFinderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("ALL");
  const [maxPrice, setMaxPrice] = useState<number>(4500000);
  const [minYield, setMinYield] = useState<number>(2.0);
  const [minGrowth, setMinGrowth] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"score" | "price_asc" | "price_desc" | "growth" | "yield">("score");
  const [viewMode, setViewMode] = useState<"grid" | "table" | "map">("grid");

  const applyPreset = (preset: "yield" | "growth" | "first_home" | "prestige" | "reset") => {
    if (preset === "yield") {
      setMinYield(4.0);
      setMaxPrice(4500000);
      setMinGrowth(0);
      setSortBy("yield");
    } else if (preset === "growth") {
      setMinYield(2.0);
      setMaxPrice(4500000);
      setMinGrowth(5.0);
      setSortBy("growth");
    } else if (preset === "first_home") {
      setMinYield(2.0);
      setMaxPrice(850000);
      setMinGrowth(0);
      setSortBy("price_asc");
    } else if (preset === "prestige") {
      setMinYield(2.0);
      setMaxPrice(5000000);
      setMinGrowth(0);
      setSortBy("score");
    } else {
      setSearchQuery("");
      setSelectedState("ALL");
      setMaxPrice(4500000);
      setMinYield(2.0);
      setMinGrowth(0);
      setSortBy("score");
    }
  };

  const states = ["ALL", "NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT"];

  const filteredSuburbs = useMemo(() => {
    return SUBURBS_DATABASE.filter((s) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          s.name.toLowerCase().includes(q) ||
          s.postcode.includes(q) ||
          s.lga.toLowerCase().includes(q);
        if (!matches) return false;
      }
      // State
      if (selectedState !== "ALL" && s.state !== selectedState) return false;
      // Price
      if (s.market.medianHousePrice > maxPrice) return false;
      // Yield
      if (s.market.grossHouseYieldPct < minYield) return false;
      // Growth
      if (s.market.capitalGrowth12MoPct < minGrowth) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "score") return b.scores.overallScore - a.scores.overallScore;
      if (sortBy === "price_asc") return a.market.medianHousePrice - b.market.medianHousePrice;
      if (sortBy === "price_desc") return b.market.medianHousePrice - a.market.medianHousePrice;
      if (sortBy === "growth") return b.market.capitalGrowth12MoPct - a.market.capitalGrowth12MoPct;
      if (sortBy === "yield") return b.market.grossHouseYieldPct - a.market.grossHouseYieldPct;
      return 0;
    });
  }, [searchQuery, selectedState, maxPrice, minYield, minGrowth, sortBy]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <span className="eyebrow-mono text-xs">/investment screener</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
          Australian Suburb Screener &amp; Finder
        </h1>
        <p className="text-sm text-ink-60 max-w-2xl">
          Filter and rank 15,000+ Australian suburbs by cashflow yield, historical capital growth, school performance, and environmental risk metrics.
        </p>
      </div>

      {/* Quick Strategy Presets */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="eyebrow-mono text-xs mr-1">/investor presets:</span>
        <button
          onClick={() => applyPreset("yield")}
          className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-ink-15 hover:bg-ink-10 text-ink-80 flex items-center gap-1.5 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-accent-emerald"></span>
          <span>High Cashflow Yield (&ge;4.0%)</span>
        </button>
        <button
          onClick={() => applyPreset("growth")}
          className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-ink-15 hover:bg-ink-10 text-ink-80 flex items-center gap-1.5 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
          <span>Capital Growth (&ge;5.0% YoY)</span>
        </button>
        <button
          onClick={() => applyPreset("first_home")}
          className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-ink-15 hover:bg-ink-10 text-ink-80 flex items-center gap-1.5 transition-colors"
        >
          <span>First Home Buyers (&le;$850k)</span>
        </button>
        <button
          onClick={() => applyPreset("prestige")}
          className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-ink-15 hover:bg-ink-10 text-ink-80 flex items-center gap-1.5 transition-colors"
        >
          <span>Prestige &amp; Blue-Chip</span>
        </button>
        <button
          onClick={() => applyPreset("reset")}
          className="px-3 py-1 rounded-full text-xs font-mono text-ink-40 hover:text-ink-80 underline ml-auto"
        >
          Reset Filters
        </button>
      </div>

      {/* Filter Matrix Card */}
      <div className="card-editorial p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Search Input */}
          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1.5">
              Suburb / Postcode / LGA
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-ink-40 absolute left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-surface-light border border-ink-15 rounded-xl pl-9 pr-3 py-2 text-sm text-ink focus:outline-none focus:border-ink-80"
              />
            </div>
          </div>

          {/* State Selector */}
          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1.5">
              State / Territory
            </label>
            <div className="flex flex-wrap gap-1">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                    selectedState === st
                      ? "bg-[#3c3a39] text-[#fefefe]"
                      : "bg-surface-light text-ink-80 hover:bg-ink-10 border border-ink-10"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-mono text-ink-60">Max Median Price</label>
              <span className="text-xs font-mono font-bold text-ink">
                {formatCurrency(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min="500000"
              max="4500000"
              step="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#3c3a39] h-2 bg-ink-10 rounded-lg cursor-pointer"
            />
          </div>

          {/* Min Yield & Sort */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1.5">
                Min Yield: {minYield}%
              </label>
              <input
                type="range"
                min="2.0"
                max="6.0"
                step="0.2"
                value={minYield}
                onChange={(e) => setMinYield(Number(e.target.value))}
                className="w-full accent-[#3c3a39] h-2 bg-ink-10 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1.5">Sort Order</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-surface-light border border-ink-15 rounded-xl px-2 py-1.5 text-xs text-ink focus:outline-none"
              >
                <option value="score">Prop Mark Score</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="growth">12M Growth %</option>
                <option value="yield">Gross Yield %</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-ink">
            {filteredSuburbs.length} Suburbs Matching Criteria
          </span>
          <span className="text-xs font-mono text-ink-40">
            (Sorted by {sortBy})
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "grid" ? "bg-[#3c3a39] text-[#fefefe]" : "bg-surface border border-ink-15 text-ink-80"
            }`}
          >
            Card Grid
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "table" ? "bg-[#3c3a39] text-[#fefefe]" : "bg-surface border border-ink-15 text-ink-80"
            }`}
          >
            Matrix Table
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "map" ? "bg-[#3c3a39] text-[#fefefe]" : "bg-surface border border-ink-15 text-ink-80"
            }`}
          >
            Map View
          </button>
        </div>
      </div>

      {/* Suburb Output View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuburbs.map((suburb) => (
            <SuburbCard key={suburb.id} suburb={suburb} />
          ))}
        </div>
      ) : viewMode === "table" ? (
        <div className="card-editorial p-0 overflow-x-auto -mx-2 sm:mx-0 shadow-subtle">
          <table className="w-full min-w-[720px] text-left text-xs border-collapse">
            <thead className="bg-surface-light border-b border-ink-10 font-mono text-ink-60">
              <tr>
                <th className="py-3 px-4">Suburb</th>
                <th className="py-3 px-4">Postcode</th>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4">Median House</th>
                <th className="py-3 px-4">12M Growth</th>
                <th className="py-3 px-4">Gross Yield</th>
                <th className="py-3 px-4">Vacancy Rate</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-5">
              {filteredSuburbs.map((suburb) => (
                <tr key={suburb.id} className="hover:bg-ink-5 transition-colors">
                  <td className="py-3 px-4 font-bold text-sm text-ink">
                    {suburb.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-ink-60">{suburb.postcode}</td>
                  <td className="py-3 px-4 font-mono font-medium">{suburb.state}</td>
                  <td className="py-3 px-4 font-mono font-bold text-ink">
                    {formatCurrency(suburb.market.medianHousePrice)}
                  </td>
                  <td className="py-3 px-4 font-mono text-accent-emerald font-semibold">
                    {formatPercent(suburb.market.capitalGrowth12MoPct, true)}
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold">
                    {formatPercent(suburb.market.grossHouseYieldPct)}
                  </td>
                  <td className="py-3 px-4 font-mono text-ink-80">
                    {suburb.market.vacancyRatePct}%
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full font-mono font-bold text-[11px] border ${getScoreColor(suburb.scores.overallScore)}`}>
                      {suburb.scores.overallScore}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      href={`/suburb-reports/${suburb.slug}`}
                      className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
                    >
                      <span>Report</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-4">
          <MultiSuburbMap
            suburbs={filteredSuburbs}
            height="620px"
          />
        </div>
      )}
    </div>
  );
}
