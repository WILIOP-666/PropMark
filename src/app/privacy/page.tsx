export default function PrivacyPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-12">
      <span className="eyebrow-mono text-xs">/legal</span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#3c3a39] mb-6">
        Privacy Policy &amp; Australian Consumer Data Right
      </h1>
      <div className="card-editorial p-8 space-y-6 text-xs text-ink-80 leading-relaxed">
        <section>
          <h3 className="text-base font-bold text-[#3c3a39] mb-2">1. Compliance with Australian Privacy Principles (APPs)</h3>
          <p>
            PROP MARK Pty Ltd strictly adheres to the Privacy Act 1988 (Cth) and the Australian Privacy Principles in managing all subscriber and property information.
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-[#3c3a39] mb-2">2. Personal Information Collected</h3>
          <p>
            We collect account registration data (names, business email addresses, billing metadata) and search telemetry strictly to optimize query caching and provide personalized valuation alerts.
          </p>
        </section>
        <section>
          <h3 className="text-base font-bold text-[#3c3a39] mb-2">3. Security &amp; Data Storage</h3>
          <p>
            All network communication is enforced via TLS 1.3 with AES-256 encrypted database storage residing in Australian data centers (Sydney, NSW).
          </p>
        </section>
      </div>
    </div>
  );
}
