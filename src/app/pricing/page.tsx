import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      tagline: "For casual homebuyers and initial market research",
      price: "$0",
      period: "forever free",
      badge: null,
      features: [
        "Search all 15,000+ Australian suburbs",
        "Top-level median house & unit prices",
        "Basic ABS Census demographic overview",
        "5 suburb profile views per month",
        "Standard G-NAF address lookup",
      ],
      ctaText: "Get Started Free",
      ctaHref: "/suburb-finder",
      highlighted: false,
    },
    {
      name: "Pro Investor",
      tagline: "For serious property investors seeking high-growth yields",
      price: "$49",
      period: "per month, billed annually",
      badge: "MOST POPULAR",
      features: [
        "Unlimited deep suburb intelligence reports",
        "Granular 1:100yr flood & bushfire risk overlays",
        "Public housing SA1 concentration mapping",
        "Historical 10-year median price & rent series",
        "Full school catchment & NAPLAN rankings",
        "Interactive mortgage cashflow & yield calculator",
        "Council DAs & incoming development pipeline",
      ],
      ctaText: "Start 7-Day Free Trial",
      ctaHref: "/suburb-finder",
      highlighted: true,
    },
    {
      name: "Buyer's Agent Pro",
      tagline: "For professional advocates, advisors & mortgage brokers",
      price: "$149",
      period: "per month, billed annually",
      badge: "AGENCY ESSENTIAL",
      features: [
        "Everything in Pro Investor, plus:",
        "White-label client PDF due diligence reports",
        "Algorithmic CMA nearest-neighbor comp-sets",
        "Hedonic AVM property valuations with confidence scores",
        "Listing history signals & agent discounting tracker",
        "Multi-suburb comparison matrix export (CSV/Excel)",
        "Priority live analyst support",
      ],
      ctaText: "Upgrade to Agency Pro",
      ctaHref: "/contact",
      highlighted: false,
    },
    {
      name: "Institutional & Fund",
      tagline: "For property syndicates, developers & mortgage funds",
      price: "$499",
      period: "per month",
      badge: "ENTERPRISE",
      features: [
        "Unlimited national portfolio analytics coverage",
        "Direct export of 586+ Australian suburb metrics",
        "Detailed statutory zoning, DA pipelines & building controls",
        "Custom GIS boundary & mesh-block spatial shapefiles",
        "Dedicated institutional analyst support",
        "Quarterly private market briefings & risk audits",
      ],
      ctaText: "Contact Institutional Team",
      ctaHref: "/contact",
      highlighted: false,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow-mono text-xs mb-2">/transparent pricing</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
          Data-Driven Suburb Intelligence For Every Stage.
        </h1>
        <p className="text-base text-ink-60 leading-relaxed">
          From first-home buyers conducting due diligence to national buyer&apos;s agencies and fintech developers powering automated valuation engines.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`card-editorial p-6 flex flex-col justify-between relative transition-all duration-200 ${
              plan.highlighted
                ? "border-[#3c3a39] ring-2 ring-ink-10 bg-surface shadow-float"
                : "hover:border-ink-40"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3c3a39] text-[#fefefe] text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                {plan.badge}
              </div>
            )}

            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                <p className="text-xs text-ink-60 mt-1 min-h-[32px] leading-relaxed">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-ink-10">
                <span className="text-4xl font-bold font-mono text-ink">
                  {plan.price}
                </span>
                <span className="text-xs text-ink-60 block mt-1 font-mono">
                  {plan.period}
                </span>
              </div>

              {/* Feature items */}
              <ul className="space-y-3 text-xs text-ink-80 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={plan.ctaHref}
              className={`w-full py-2.5 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all ${
                plan.highlighted
                  ? "btn-pill-dark"
                  : "btn-pill-ghost"
              }`}
            >
              <span>{plan.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="card-editorial p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="eyebrow-mono text-xs">/frequently asked questions</span>
          <h2 className="text-2xl font-bold text-ink">
            Questions About Prop Mark Subscriptions
          </h2>
        </div>

        <div className="divide-y divide-ink-10 space-y-4">
          <div className="pt-4">
            <h4 className="text-sm font-bold text-ink mb-1">
              Where does Prop Mark source its property data?
            </h4>
            <p className="text-xs text-ink-60 leading-relaxed">
              Prop Mark synthesizes data directly from official state Land Titles Offices, Australian Bureau of Statistics (ABS) 2021/2026 Census QuickStats, ACARA school performance records, state SES flood maps, and weekly council planning registers.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-bold text-ink mb-1">
              Can I cancel my subscription anytime?
            </h4>
            <p className="text-xs text-ink-60 leading-relaxed">
              Yes, all subscriptions can be managed and cancelled instantly from your account dashboard with zero lock-in contracts or penalty fees.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-bold text-ink mb-1">
              Do you offer custom API integrations for proptech companies?
            </h4>
            <p className="text-xs text-ink-60 leading-relaxed">
              Yes, our Enterprise tier includes dedicated engineering support, custom webhook triggers, and tailored GIS bounding polygon queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
