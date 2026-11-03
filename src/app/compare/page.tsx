"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Award, TrendingUp, ShieldAlert, Users, Building, Scale } from "lucide-react";
import { SUBURBS_DATABASE } from "../../lib/data/suburbsData";
import { formatCurrency, formatPercent, getScoreColor } from "../../lib/utils";

export default function CompareSuburbsPage() {
  const [suburb1Slug, setSuburb1Slug] = useState<string>("bondi-beach-nsw-2026");
  const [suburb2Slug, setSuburb2Slug] = useState<string>("chatswood-nsw-2067");
  const [suburb3Slug, setSuburb3Slug] = useState<string>("bankstown-nsw-2200");

  const sub1 = SUBURBS_DATABASE.find((s) => s.slug === suburb1Slug) || SUBURBS_DATABASE[0];
  const sub2 = SUBURBS_DATABASE.find((s) => s.slug === suburb2Slug) || SUBURBS_DATABASE[1];
  const sub3 = SUBURBS_DATABASE.find((s) => s.slug === suburb3Slug);

  const comparedSuburbs = [sub1, sub2, sub3].filter(Boolean) as typeof SUBURBS_DATABASE;

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow-mono text-xs">/comparative analysis</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          Side-by-Side Suburb Comparison Engine
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-3xl leading-relaxed">
          Evaluate up to three Australian suburbs head-to-head across capital growth trajectories, rental cashflow yields, ABS Census affluence, school zones, and environmental hazard overlays.
        </p>
      </div>

      {/* Suburb Selector Rail */}
      <div className="card-editorial p-6 mb-8">
        <span className="eyebrow-mono text-xs block mb-3">/select target markets to compare:</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1">Market 1</label>
            <select
              value={suburb1Slug}
              onChange={(e) => setSuburb1Slug(e.target.value)}
              className="w-full p-2.5 bg-surface-light border border-ink-15 rounded-xl text-sm font-semibold text-[#3c3a39] focus:outline-none"
            >
              {SUBURBS_DATABASE.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.name}, {s.state} {s.postcode}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1">Market 2</label>
            <select
              value={suburb2Slug}
              onChange={(e) => setSuburb2Slug(e.target.value)}
              className="w-full p-2.5 bg-surface-light border border-ink-15 rounded-xl text-sm font-semibold text-[#3c3a39] focus:outline-none"
            >
              {SUBURBS_DATABASE.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.name}, {s.state} {s.postcode}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1">Market 3 (Optional)</label>
            <select
              value={suburb3Slug}
              onChange={(e) => setSuburb3Slug(e.target.value)}
              className="w-full p-2.5 bg-surface-light border border-ink-15 rounded-xl text-sm font-semibold text-[#3c3a39] focus:outline-none"
            >
              <option value="">-- None (2 Suburbs Comparison) --</option>
              {SUBURBS_DATABASE.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.name}, {s.state} {s.postcode}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="card-editorial p-0 overflow-x-auto mb-10">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-surface-light border-b border-ink-10">
              <th className="p-4 font-mono text-ink-60 w-1/4">Metric / Dimension</th>
              {comparedSuburbs.map((sub) => (
                <th key={sub.id} className="p-4 w-1/4">
                  <div className="eyebrow-mono text-[11px]">/{sub.state} • {sub.postcode}</div>
                  <div className="text-lg font-bold text-[#3c3a39]">{sub.name}</div>
                  <div className="text-xs font-mono text-ink-60 mt-0.5">{sub.summary.distanceToCbdKm}km to CBD</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-10">
            {/* Row: Score */}
            <tr className="bg-surface-tint/30">
              <td className="p-4 font-mono font-bold text-ink-80">Prop Mark Overall Score</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4">
                  <span className={`px-2.5 py-1 rounded-full font-mono font-bold text-xs border ${getScoreColor(sub.scores.overallScore)}`}>
                    {sub.scores.overallScore} / 100
                  </span>
                </td>
              ))}
            </tr>

            {/* Row: Median Price */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Median House Price</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-bold text-sm text-[#3c3a39]">
                  {formatCurrency(sub.market.medianHousePrice)}
                </td>
              ))}
            </tr>

            {/* Row: Capital Growth 12M */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">12M Capital Growth</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-bold text-accent-emerald text-sm">
                  {formatPercent(sub.market.capitalGrowth12MoPct, true)}
                </td>
              ))}
            </tr>

            {/* Row: Gross Yield */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Gross Rental Yield</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-bold text-[#3c3a39] text-sm">
                  {formatPercent(sub.market.grossHouseYieldPct)}
                  <span className="text-xs text-ink-40 block font-normal">${sub.market.medianHouseRentWeek}/wk</span>
                </td>
              ))}
            </tr>

            {/* Row: Vacancy Rate */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Rental Vacancy Rate</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-medium">
                  {sub.market.vacancyRatePct}%
                </td>
              ))}
            </tr>

            {/* Row: Days on Market */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Days on Market (DOM)</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-medium">
                  {sub.market.daysOnMarketHouse} days
                </td>
              ))}
            </tr>

            {/* Row: Median Household Income */}
            <tr className="bg-surface-tint/20">
              <td className="p-4 font-mono font-medium text-ink-60">Weekly Household Income</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-bold text-[#3c3a39]">
                  ${sub.demographics.medianHouseholdIncomeWeekly}
                </td>
              ))}
            </tr>

            {/* Row: Tertiary Education */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Tertiary Education %</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono">
                  {sub.demographics.educationTertiaryPct}%
                </td>
              ))}
            </tr>

            {/* Row: Flood Risk */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Flood Hazard Exposure</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono">
                  <span className="px-2 py-0.5 rounded bg-surface border border-ink-10">
                    {sub.hazards.floodRisk}
                  </span>
                </td>
              ))}
            </tr>

            {/* Row: Public Housing */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">Public Housing SA1 %</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono">
                  {sub.hazards.publicHousingPct}%
                </td>
              ))}
            </tr>

            {/* Row: WalkScore */}
            <tr>
              <td className="p-4 font-mono font-medium text-ink-60">WalkScore / Transit</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4 font-mono font-bold text-accent-blue">
                  {sub.commute.walkScore} / 100
                </td>
              ))}
            </tr>

            {/* Action Row */}
            <tr className="bg-surface-light">
              <td className="p-4 font-mono font-bold">Deep Report</td>
              {comparedSuburbs.map((sub) => (
                <td key={sub.id} className="p-4">
                  <Link
                    href={`/suburb-reports/${sub.slug}`}
                    className="btn-pill-dark text-xs py-2 px-4 inline-flex items-center gap-1"
                  >
                    <span>Full Report</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
