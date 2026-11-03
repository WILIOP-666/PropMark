import { SuburbPlanning } from "../lib/types";
import { Hammer, HardHat, FileSpreadsheet, Building } from "lucide-react";

interface PlanningZoningCardProps {
  planning: SuburbPlanning;
  suburbName: string;
}

export default function PlanningZoningCard({ planning, suburbName }: PlanningZoningCardProps) {
  return (
    <div className="card-editorial p-6">
      <div className="mb-6">
        <span className="eyebrow-mono text-xs">/council & development pipeline</span>
        <h4 className="text-lg font-bold text-[#3c3a39]">
          Zoning Codes & Active Development Applications
        </h4>
        <p className="text-xs text-ink-60 mt-1">
          Statutory planning controls under local planning instruments and incoming supply pipeline in {suburbName}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active DAs & Major Projects */}
        <div className="space-y-4">
          <div className="p-4 bg-surface-light rounded-xl border border-ink-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-[#3c3a39] border border-ink-10">
                <Hammer className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <span className="text-xs text-ink-60 block">Active Development Applications</span>
                <span className="text-xl font-bold font-mono text-[#3c3a39]">
                  {planning.activeDaCount} Lodged / Approved
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-surface-light rounded-xl border border-ink-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-[#3c3a39] border border-ink-10">
                <HardHat className="w-4 h-4 text-accent-orange" />
              </div>
              <div>
                <span className="text-xs text-ink-60 block">Major Infrastructure Projects (&gt;$5M)</span>
                <span className="text-xl font-bold font-mono text-[#3c3a39]">
                  {planning.majorProjectsCount} Projects Underway
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-surface-light rounded-xl border border-ink-5">
            <span className="text-xs font-mono text-ink-60 uppercase block mb-1">
              Primary Statutory Zoning Instrument
            </span>
            <span className="text-sm font-bold text-[#3c3a39]">
              {planning.primaryZoning}
            </span>
          </div>
        </div>

        {/* Zoning Breakdown */}
        <div>
          <h5 className="text-xs font-mono uppercase text-ink-60 tracking-wider mb-3">
            Zoning Land Allocation Share
          </h5>
          <div className="space-y-3">
            {planning.zoningBreakdown.map((zone, idx) => (
              <div key={idx} className="p-3 bg-surface-light rounded-xl border border-ink-5">
                <div className="flex justify-between items-center text-xs mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-ink-10 text-[#3c3a39]">
                      {zone.code}
                    </span>
                    <span className="font-medium text-ink-80">{zone.description}</span>
                  </div>
                  <span className="font-mono font-bold text-[#3c3a39]">{zone.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-ink-10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3c3a39] rounded-full"
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
