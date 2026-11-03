import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Australian Property Cycle: Where Does Each Capital City Sit in 2026?",
      date: "October 28, 2026",
      category: "Macro Outlook",
      snippet: "An exhaustive state-by-state assessment of cash rate impacts, borrowing capacity recovery, and regional yield outperformance.",
      slug: "property-cycle-2026",
    },
    {
      title: "Why We Don't Rely on Portal Listing Prices: The Agent Quoting Bias",
      date: "October 14, 2026",
      category: "Data Integrity",
      snippet: "Our analysis of 45,000 auction campaigns demonstrates a systematic 8.4% underquoting variance between portal guide prices and unconditional settlements.",
      slug: "agent-quoting-bias-analysis",
    },
    {
      title: "Brisbane 2032 Olympics Infrastructure: Suburb Winners & Supply Bottlenecks",
      date: "September 30, 2026",
      category: "Infrastructure",
      snippet: "Cross-referencing Queensland state transport expenditures with zoning allowances across New Farm, Woolloongabba, and Hamilton.",
      slug: "brisbane-olympics-suburb-winners",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="mb-10">
        <span className="eyebrow-mono text-xs">/research dispatches</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          Prop Mark Market Research &amp; Articles
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-2xl leading-relaxed">
          Analytical commentary, statistical studies, and market investigations authored by the Prop Mark data science team.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <div key={idx} className="card-editorial p-6 hover:border-ink-40 transition-all">
            <div className="flex items-center gap-3 text-xs font-mono text-ink-60 mb-2">
              <span>/{post.category.toLowerCase()}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#3c3a39] mb-2">{post.title}</h2>
            <p className="text-sm text-ink-60 leading-relaxed mb-4 max-w-3xl">
              {post.snippet}
            </p>
            <Link
              href="/definitions"
              className="text-xs font-semibold text-accent-blue hover:underline flex items-center gap-1"
            >
              <span>Read Full Article</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
