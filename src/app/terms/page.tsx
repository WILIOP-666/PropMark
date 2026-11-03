export default function TermsPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-12">
      <span className="eyebrow-mono text-xs">/legal</span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-6">
        Terms of Service
      </h1>
      <div className="card-editorial p-8 space-y-6 text-xs text-ink-80 leading-relaxed">
        <section>
          <h3 className="text-base font-bold text-ink mb-2">1. Acceptance of Terms</h3>
          <p>
            By accessing or utilizing the Prop Mark website, REST API, or automated valuation feeds operated by PROP MARK Pty Ltd (ACN 642 198 221), you agree to be bound unconditionally by these terms.
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-ink mb-2">2. Data Usage &amp; API Restrictions</h3>
          <p>
            Prop Mark grants authorized subscribers a revocable, non-exclusive license to utilize property data feeds. Automated bulk crawling, scraping, or scraping mirror services outside of contractual enterprise agreements are strictly prohibited.
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-ink mb-2">3. Intellectual Property Rights</h3>
          <p>
            Algorithmic scoring models, hedonic regression formulas, and synthesized mesh-block scores remain the exclusive intellectual property of PROP MARK Pty Ltd. G-NAF and ABS data are acknowledged under their respective statutory Open Data licenses.
          </p>
        </section>
      </div>
    </div>
  );
}
