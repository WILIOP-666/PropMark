import { SuburbSchool } from "../lib/types";
import { GraduationCap, Award, MapPin, CheckCircle2 } from "lucide-react";

interface SchoolCatchmentListProps {
  schools: SuburbSchool[];
  suburbName: string;
}

export default function SchoolCatchmentList({ schools, suburbName }: SchoolCatchmentListProps) {
  return (
    <div className="card-editorial p-6">
      <div className="mb-6">
        <span className="eyebrow-mono text-xs">/education & catchments</span>
        <h4 className="text-lg font-bold text-ink">
          Schools & Academic Catchment Zones
        </h4>
        <p className="text-xs text-ink-60 mt-1">
          Government primary/secondary catchment boundaries and independent school options servicing {suburbName}.
        </p>
      </div>

      <div className="divide-y divide-ink-10 border border-ink-10 rounded-xl overflow-hidden bg-surface-light">
        {schools.map((school, idx) => (
          <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-ink-5 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ink border border-ink-10 shrink-0">
                <GraduationCap className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="font-bold text-sm text-ink">{school.name}</h5>
                  {school.catchment && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-50 text-accent-emerald border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      In Catchment
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-ink-60 mt-0.5">
                  <span>{school.type}</span>
                  <span>•</span>
                  <span>{school.sector}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-ink-40" />
                    {school.distanceKm} km away
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right self-end sm:self-center">
              <div>
                <span className="text-[10px] font-mono text-ink-40 uppercase block">ICSEA Score</span>
                <span className="text-sm font-bold font-mono text-ink">{school.icsea}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-ink-40 uppercase block">State Rank</span>
                <span className="text-sm font-bold font-mono text-accent-blue">Top {100 - school.naplanRank}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
