import Link from "next/link";
import { ArrowUpRight, TrendingUp, Percent, MapPin, Building, Users } from "lucide-react";
import { SuburbProfile } from "../lib/types";
import { formatCurrency, formatPercent, getScoreColor } from "../lib/utils";

interface SuburbCardProps {
  suburb: SuburbProfile;
}

export default function SuburbCard({ suburb }: SuburbCardProps) {
  return (
    <div className="card-editorial flex flex-col justify-between group hover:border-ink-40 transition-all duration-200">
      <div>
        {/* Header Rail */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="eyebrow-mono text-xs">/{suburb.state} • {suburb.postcode}</span>
              <span className="text-[11px] font-mono bg-ink-5 px-2 py-0.5 rounded text-ink-60">
                {suburb.summary.distanceToCbdKm}km CBD
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#3c3a39] tracking-tight group-hover:text-black">
              {suburb.name}
            </h3>
            <p className="text-xs text-ink-60 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-ink-40" />
              <span>{suburb.lga}</span>
            </p>
          </div>

          {/* Prop Mark Score Badge */}
          <div className="flex flex-col items-end">
            <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColor(suburb.scores.overallScore)}`}>
              {suburb.scores.overallScore} / 100
            </div>
            <span className="text-[10px] text-ink-40 font-mono mt-1">Livability Index</span>
          </div>
        </div>

        {/* Pricing Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-ink-10 mb-4 bg-surface-light rounded-lg p-2.5">
          <div>
            <span className="text-[11px] font-mono text-ink-60 block">Median House</span>
            <span className="text-base font-bold text-[#3c3a39]">
              {formatCurrency(suburb.market.medianHousePrice)}
            </span>
            <span className="text-[11px] text-accent-emerald flex items-center gap-0.5 font-medium">
              <TrendingUp className="w-3 h-3" />
              {formatPercent(suburb.market.capitalGrowth12MoPct, true)} (12m)
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-ink-60 block">Gross Yield</span>
            <span className="text-base font-bold text-[#3c3a39]">
              {formatPercent(suburb.market.grossHouseYieldPct)}
            </span>
            <span className="text-[11px] text-ink-60 font-mono block">
              Rent: ${suburb.market.medianHouseRentWeek}/wk
            </span>
          </div>
        </div>

        {/* Demographics & Lifestyle Highlights */}
        <div className="space-y-2 text-xs text-ink-80 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-ink-60 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-ink-40" />
              <span>Weekly Household Inc.</span>
            </span>
            <span className="font-mono font-medium">${suburb.demographics.medianHouseholdIncomeWeekly}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-ink-60 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-ink-40" />
              <span>Rental Vacancy Rate</span>
            </span>
            <span className="font-mono font-medium text-accent-emerald">{suburb.market.vacancyRatePct}%</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href={`/suburb-reports/${suburb.slug}`}
        className="w-full btn-pill-dark text-xs py-2.5 justify-center group-hover:bg-black"
      >
        <span>View Full Suburb Report</span>
        <ArrowUpRight className="w-3.5 h-3.5 shift-arrow transition-transform" />
      </Link>
    </div>
  );
}
