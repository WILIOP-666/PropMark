import Link from "next/link";
import { Database, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="max-w-3xl mb-12">
        <span className="eyebrow-mono text-xs">/about the platform</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-4">
          Uncovering Truth in Australian Real Estate Data.
        </h1>
        <p className="text-base text-ink-60 leading-relaxed">
          Prop Mark was engineered to dismantle the black box of Australian property market reporting. Traditional portals optimize for real estate agent advertising revenue; Prop Mark optimizes strictly for investor and buyer analytical truth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card-editorial p-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-accent-blue mb-4">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#3c3a39] mb-2">Independent Aggregation</h3>
          <p className="text-xs text-ink-60 leading-relaxed">
            We bypass portal bias by triangulating official government land registries, ABS Census QuickStats, and local council planning registers directly.
          </p>
        </div>

        <div className="card-editorial p-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-accent-emerald mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#3c3a39] mb-2">Street-Level Granularity</h3>
          <p className="text-xs text-ink-60 leading-relaxed">
            Suburb averages hide critical micro-pockets. We calculate livability, affluence, and capital growth drivers down to the individual SA1 mesh-block level.
          </p>
        </div>

        <div className="card-editorial p-6">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-accent-orange mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#3c3a39] mb-2">Unbiased Due Diligence</h3>
          <p className="text-xs text-ink-60 leading-relaxed">
            We surface the hazards agents often omit: 1:100yr overland flow flood paths, bushfire BAL buffers, public housing clusters, and high-voltage transmission lines.
          </p>
        </div>
      </div>

      <div className="card-editorial p-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#3c3a39] mb-4">Our Data Engineering Stack</h2>
        <div className="space-y-4 text-xs text-ink-80 leading-relaxed">
          <p>
            Prop Mark leverages high-performance Next.js 14, edge-cached REST microservices, and G-NAF (Geocoded National Address File) persistent spatial identifiers.
          </p>
          <p>
            By harmonizing hedonic regression valuation models with statutory council planning databases, we deliver reliable Automated Valuation Models (AVM) with measurable confidence bounds.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-ink-10 flex gap-4">
          <Link href="/suburb-finder" className="btn-pill-dark text-xs py-2 px-5">
            Explore Suburb Screener
          </Link>
          <Link href="/developers/api-docs" className="btn-pill-ghost text-xs py-2 px-5">
            Read API Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
