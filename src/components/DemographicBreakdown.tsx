import { SuburbDemographics } from "../lib/types";
import { Users, GraduationCap, Briefcase, Home } from "lucide-react";

interface DemographicBreakdownProps {
  demographics: SuburbDemographics;
  suburbName: string;
}

export default function DemographicBreakdown({ demographics, suburbName }: DemographicBreakdownProps) {
  return (
    <div className="card-editorial p-6">
      <div className="mb-6">
        <span className="eyebrow-mono text-xs">/abs census 2021-2026 data</span>
        <h4 className="text-lg font-bold text-[#3c3a39]">
          Demographic & Socioeconomic Profile of {suburbName}
        </h4>
      </div>

      {/* Top 4 Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="p-3.5 bg-surface-light rounded-xl border border-ink-5">
          <div className="flex items-center gap-2 text-ink-60 text-xs mb-1">
            <Users className="w-3.5 h-3.5 text-accent-blue" />
            <span>Median Age</span>
          </div>
          <span className="text-xl font-bold font-mono text-[#3c3a39]">
            {demographics.medianAge} yrs
          </span>
        </div>

        <div className="p-3.5 bg-surface-light rounded-xl border border-ink-5">
          <div className="flex items-center gap-2 text-ink-60 text-xs mb-1">
            <Briefcase className="w-3.5 h-3.5 text-accent-emerald" />
            <span>Median Income</span>
          </div>
          <span className="text-xl font-bold font-mono text-[#3c3a39]">
            ${demographics.medianHouseholdIncomeWeekly}
          </span>
          <span className="text-[10px] text-ink-40 font-mono block">per week / household</span>
        </div>

        <div className="p-3.5 bg-surface-light rounded-xl border border-ink-5">
          <div className="flex items-center gap-2 text-ink-60 text-xs mb-1">
            <GraduationCap className="w-3.5 h-3.5 text-accent-lavender" />
            <span>Tertiary Educated</span>
          </div>
          <span className="text-xl font-bold font-mono text-[#3c3a39]">
            {demographics.educationTertiaryPct}%
          </span>
          <span className="text-[10px] text-ink-40 font-mono block">Bachelor degree or higher</span>
        </div>

        <div className="p-3.5 bg-surface-light rounded-xl border border-ink-5">
          <div className="flex items-center gap-2 text-ink-60 text-xs mb-1">
            <Home className="w-3.5 h-3.5 text-accent-orange" />
            <span>Professional Roles</span>
          </div>
          <span className="text-xl font-bold font-mono text-[#3c3a39]">
            {demographics.professionalOccupationPct}%
          </span>
          <span className="text-[10px] text-ink-40 font-mono block">Managers & Professionals</span>
        </div>
      </div>

      {/* Cultural Ancestry & Household Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-ink-10">
        {/* Ancestry Bar Chart */}
        <div>
          <h5 className="text-xs font-mono uppercase text-ink-60 tracking-wider mb-3">
            Top Ancestries Reported
          </h5>
          <div className="space-y-2.5">
            {demographics.ancestry.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-[#3c3a39]">
                  <span>{item.label}</span>
                  <span className="font-mono text-ink-60">{item.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-ink-10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-blue rounded-full"
                    style={{ width: `${item.pct * 2}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Household Structure Breakdown */}
        <div>
          <h5 className="text-xs font-mono uppercase text-ink-60 tracking-wider mb-3">
            Household Composition
          </h5>
          <div className="space-y-3 bg-surface-light p-4 rounded-xl border border-ink-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-80">Couples with Children & Families</span>
              <span className="font-mono font-bold text-[#3c3a39]">
                {demographics.familyHouseholdsPct}%
              </span>
            </div>
            <div className="w-full h-2 bg-ink-10 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-accent-emerald"
                style={{ width: `${demographics.familyHouseholdsPct}%` }}
              ></div>
              <div
                className="h-full bg-accent-gold"
                style={{ width: `${demographics.singleHouseholdsPct}%` }}
              ></div>
              <div
                className="h-full bg-accent-lavender"
                style={{ width: `${100 - demographics.familyHouseholdsPct - demographics.singleHouseholdsPct}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-ink-80">Single / Solo Occupant Households</span>
              <span className="font-mono font-bold text-[#3c3a39]">
                {demographics.singleHouseholdsPct}%
              </span>
            </div>
            <div className="text-[11px] text-ink-40 pt-1">
              Source: Australian Bureau of Statistics (ABS) Census QuickStats, customized for Prop Mark.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
