import { SuburbPlanning } from "../lib/types";
import { Hammer, HardHat, FileSpreadsheet, Building } from "lucide-react";

interface PlanningZoningCardProps {
  planning: SuburbPlanning;
  suburbName: string;
}

export default function PlanningZoningCard({ planning, suburbName }: PlanningZoningCardProps) {
  return (
    <div className="card-editorial p-4 sm:p-6">
      <div className="mb-5 sm:mb-6">
        <span className="eyebrow-mono text-xs">/council &amp; development pipeline</span>
        <h4 className="text-base sm:text-lg font-bold text-ink">
          Zoning Codes &amp; Active Development Applications
        </h4>
        <p className="text-xs text-ink-60 mt-1">
          Statutory planning controls under local planning instruments and incoming supply pipeline in {suburbName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Active DAs & Major Projects */}
        <div className="space-y-3.5">
          <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ink border border-ink-10 shrink-0">
                <Hammer className="w-4 h-4 text-accent-blue" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-ink-60 block truncate">Active Development Applications</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-ink">
                  {planning.activeDaCount} Lodged / Approved
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ink border border-ink-10 shrink-0">
                <HardHat className="w-4 h-4 text-accent-orange" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-ink-60 block truncate">Major Infrastructure Projects (&gt;$5M)</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-ink">
                  {planning.majorProjectsCount} Projects Underway
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 uppercase block mb-1">
              Primary Statutory Zoning Instrument
            </span>
            <span className="text-sm font-bold text-ink">
              {planning.primaryZoning}
            </span>
          </div>
        </div>

        {/* Zoning Breakdown */}
        <div>
          <h5 className="text-xs font-mono uppercase text-ink-60 tracking-wider mb-3">
            Zoning Land Allocation Share
          </h5>
          <div className="space-y-2.5 sm:space-y-3">
            {planning.zoningBreakdown.map((zone, idx) => (
              <div key={idx} className="p-3 bg-surface-light rounded-xl border border-ink-5">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-ink-10 text-ink shrink-0">
                      {zone.code}
                    </span>
                    <span className="font-medium text-ink-80 truncate">{zone.description}</span>
                  </div>
                  <span className="font-mono font-bold text-ink shrink-0">{zone.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-ink-10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-ink rounded-full"
                    style={{ width: `${zone.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
