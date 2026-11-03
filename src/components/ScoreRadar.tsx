import { SuburbScores } from "../lib/types";
import { getScoreColor } from "../lib/utils";

interface ScoreRadarProps {
  scores: SuburbScores;
}

export default function ScoreRadar({ scores }: ScoreRadarProps) {
  const scoreItems = [
    { label: "Affluence & Wealth", score: scores.affluenceScore, desc: "High household income & professional employment" },
    { label: "Overall Livability", score: scores.livabilityScore, desc: "Parks, cafes, public safety & civic infrastructure" },
    { label: "Hipster & Culture", score: scores.hipsterScore, desc: "Art galleries, specialty dining & vibrant streetscapes" },
    { label: "Family Friendliness", score: scores.familyScore, desc: "School catchments, childcare & detached dwelling density" },
    { label: "Tranquillity & Nature", score: scores.tranquillityScore, desc: "Quiet residential streets, low traffic & green canopy" },
    { label: "Transit & Convenience", score: scores.convenienceScore, desc: "Rail, light rail, shopping centres & CBD commute times" },
  ];

  return (
    <div className="card-editorial p-4 sm:p-6">
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div>
          <span className="eyebrow-mono text-xs">/multi-factor index</span>
          <h4 className="text-base sm:text-lg font-bold text-ink">
            Livability &amp; Lifestyle Diagnostic
          </h4>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold font-mono text-ink">
            {scores.overallScore}
          </span>
          <span className="text-xs font-mono text-ink-60 block">/ 100 Index</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {scoreItems.map((item, idx) => (
          <div key={idx} className="p-3 sm:p-3.5 bg-surface-light rounded-xl border border-ink-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs sm:text-sm font-semibold text-ink">{item.label}</span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${getScoreColor(item.score)}`}>
                {item.score}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-ink-10 rounded-full overflow-hidden mb-1.5">
              <div
                className="h-full bg-ink rounded-full transition-all duration-500"
                style={{ width: `${item.score}%` }}
              ></div>
            </div>
            <p className="text-[11px] text-ink-60 leading-tight">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
