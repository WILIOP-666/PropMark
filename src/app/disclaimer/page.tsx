export default function DisclaimerPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-12">
      <span className="eyebrow-mono text-xs">/statutory disclosure</span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-6">
        Financial &amp; Real Estate Investment Disclaimer
      </h1>
      <div className="card-editorial p-8 space-y-6 text-xs text-ink-80 leading-relaxed">
        <section>
          <h3 className="text-base font-bold text-ink mb-2">General Advice Warning Only</h3>
          <p>
            The information and automated valuation model (AVM) outputs provided on this website and via our REST API are general in nature and do NOT constitute personal financial, investment, taxation, or legal advice under the Corporations Act 2001 (Cth).
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-ink mb-2">Automated Valuation Limitations</h3>
          <p>
            Automated valuations and yield calculations are statistical estimations derived from historical settlement records, spatial interpolations, and census aggregates. They do not incorporate physical structural inspections, internal finishes, pest conditions, or unrecorded planning disputes.
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-ink mb-2">Independent Professional Advice</h3>
          <p>
            Users are strongly advised to conduct independent due diligence, commission a licensed physical building and pest inspection, and obtain tailored advice from an Australian Financial Services Licensee (AFSL) and qualified conveyancer prior to executing legally binding property transactions.
          </p>
        </section>
      </div>
    </div>
  );
}
