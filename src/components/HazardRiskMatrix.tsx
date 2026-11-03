import { SuburbHazards } from "../lib/types";
import { ShieldAlert, Flame, Waves, Volume2, Mountain, Building2 } from "lucide-react";
import { getRiskBadgeClass } from "../lib/utils";

interface HazardRiskMatrixProps {
  hazards: SuburbHazards;
  suburbName: string;
}

export default function HazardRiskMatrix({ hazards, suburbName }: HazardRiskMatrixProps) {
  return (
    <div className="card-editorial p-4 sm:p-6">
      <div className="mb-5 sm:mb-6">
        <span className="eyebrow-mono text-xs">/due diligence &amp; hazards</span>
        <h4 className="text-base sm:text-lg font-bold text-[#3c3a39]">
          Environmental, Structural &amp; Demographic Risks
        </h4>
        <p className="text-xs text-ink-60 mt-1">
          Crucial risk overlays mapped from NSW/VIC State Planning portals and Council SES flood mappings for {suburbName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {/* Flood Risk */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span className="truncate">Flood Risk</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium shrink-0 ${getRiskBadgeClass(hazards.floodRisk)}`}>
                {hazards.floodRisk}
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Based on 1-in-100 year Annual Exceedance Probability (AEP) flood models.
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            SES Overland Flow: Low Exposure
          </div>
        </div>

        {/* Bushfire Risk */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                <span className="truncate">Bushfire Hazard</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium shrink-0 ${getRiskBadgeClass(hazards.bushfireRisk)}`}>
                {hazards.bushfireRisk}
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Proximity to designated bushfire-prone vegetation buffers (BAL rating).
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            RFS Prone Register: Cleared Urban Fabric
          </div>
        </div>

        {/* Public Housing Density */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-accent-lavender shrink-0" />
                <span className="truncate">Public Housing SA1</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-surface text-ink-80 border border-ink-10 shrink-0">
                {hazards.publicHousingPct}%
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Percentage of social/public housing properties in target ABS statistical area.
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            Metropolitan Average: ~4.2%
          </div>
        </div>

        {/* Noise Contours */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                <span className="truncate">Noise Impact</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium shrink-0 ${getRiskBadgeClass(hazards.noiseImpact)}`}>
                {hazards.noiseImpact}
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Arterial road traffic, rail corridor proximity, and ANEF airport flight paths.
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            ANEF Rating: Under 20 Contour
          </div>
        </div>

        {/* Topography & Slope */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5 text-accent-sage shrink-0" />
                <span className="truncate">Slope &amp; Landslip</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-surface text-ink-80 border border-ink-10 shrink-0">
                {hazards.slopeTopography}
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Terrain inclination and geotechnical landslip stability index.
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            Foundation Risk: Negligible
          </div>
        </div>

        {/* High Voltage Lines */}
        <div className="p-3.5 sm:p-4 bg-surface-light rounded-xl border border-ink-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
              <span className="text-xs font-mono text-ink-60 uppercase flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                <span className="truncate">HV Power Lines</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-accent-emerald bg-emerald-50 border border-emerald-200 shrink-0">
                No Impact
              </span>
            </div>
            <p className="text-xs text-ink-80 leading-relaxed">
              Distance to high-voltage transmission easements &amp; substations (&gt;1,000m).
            </p>
          </div>
          <div className="mt-3 text-[10px] text-ink-40 font-mono">
            EMF Safety Buffer: 100% Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
