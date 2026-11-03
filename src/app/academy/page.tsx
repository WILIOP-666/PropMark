import Link from "next/link";
import { BookOpen, ArrowUpRight, GraduationCap } from "lucide-react";

export default function AcademyPage() {
  const guides = [
    {
      title: "Why Rental Trends Predict Your Next Capital Gain",
      slug: "rental-trends-predict-capital-gain",
      category: "Market Indicators",
      readTime: "7 min read",
      summary: "Explore why acute rental vacancy compression below 1.2% reliably leads median price increases by 6 to 12 months in Australian metro corridors.",
    },
    {
      title: "Understanding Microburbs & Prop Mark Growth Indicators",
      slug: "growth-indicators-explained",
      category: "Analytics Methodology",
      readTime: "10 min read",
      summary: "A technical breakdown of our composite livability index, SEIFA advantage scores, and mortgage stress vulnerability benchmarks.",
    },
    {
      title: "How Public School Catchments Drive a 15% Price Premium",
      slug: "school-catchments-valuation-impact",
      category: "Demographic Drivers",
      readTime: "8 min read",
      summary: "Empirical analysis of ACARA ICSEA rankings and NAPLAN percentiles on single-family home valuations across Sydney and Melbourne.",
    },
    {
      title: "Due Diligence Checklist: Spotting Flood & Bushfire Risks",
      slug: "due-diligence-hazard-checklist",
      category: "Risk Mitigation",
      readTime: "12 min read",
      summary: "How to read council overland flow maps, SES 1:100yr flood overlays, and bushfire BAL ratings before attending auction.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="mb-10">
        <span className="eyebrow-mono text-xs">/educational guides</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          Prop Mark Investor Academy
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-2xl leading-relaxed">
          Master the statistical frameworks, demographic indicators, and algorithmic valuation techniques used by Australia&apos;s elite buyer&apos;s advocates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, idx) => (
          <div key={idx} className="card-editorial p-6 flex flex-col justify-between hover:border-ink-40 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-ink-60 mb-2">
                <span>/{guide.category.toLowerCase()}</span>
                <span>{guide.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-[#3c3a39] mb-2">{guide.title}</h3>
              <p className="text-xs text-ink-60 leading-relaxed mb-6">
                {guide.summary}
              </p>
            </div>
            <Link
              href="/definitions"
              className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
            >
              <span>Read Full Research Guide</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
