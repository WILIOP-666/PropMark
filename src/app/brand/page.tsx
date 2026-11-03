export default function BrandPage() {
  const colors = [
    { name: "Background Canvas", token: "--color-background", hex: "#fefcf5", desc: "Warm cream paper primary surface" },
    { name: "Surface White", token: "--color-white", hex: "#fffcf6", desc: "Cards, navbar, footer containers" },
    { name: "Divider Tint", token: "--color-white-tint", hex: "#eaeae2", desc: "Subtle borders and chips" },
    { name: "Primary Ink", token: "--color-black", hex: "#3c3a39", desc: "Warm near-black text and pill buttons" },
    { name: "Voltage Red", token: "--color-primary-red", hex: "#ff272d", desc: "Signature accent and high risk indicators" },
    { name: "Warm Orange", token: "--color-orange", hex: "#ff7300", desc: "Moderate risk and planning badges" },
    { name: "Primary Yellow", token: "--color-primary-yellow", hex: "#fdc211", desc: "Warning indicators" },
    { name: "Electric Pink", token: "--color-pink", hex: "#f49eff", desc: "Unit & apartment charts" },
    { name: "Lavender", token: "--color-lav", hex: "#817fff", desc: "API route tags & secondary indicators" },
    { name: "Primary Blue", token: "--color-primary-blue", hex: "#2677ff", desc: "Houses, links and primary data points" },
    { name: "Turquoise", token: "--color-turquoise", hex: "#79deeb", desc: "Waterfront and coastal accents" },
    { name: "Success Emerald", token: "--color-emerald", hex: "#32ae88", desc: "Positive cash flow and capital growth" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow-mono text-xs">/design system &amp; tokens</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          PROP MARK Brand Guidelines
        </h1>
        <p className="text-sm sm:text-base text-ink-60 leading-relaxed">
          Inspired by warm, editorial print publication aesthetics. Warm cream canvas carrying rich near-black prose, punctuated by vibrant pastel accents and monospace CLI path eyebrows.
        </p>
      </div>

      <div className="space-y-12">
        {/* Color Palette */}
        <div>
          <h2 className="text-2xl font-bold text-[#3c3a39] mb-4">Color Palette &amp; Tokens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colors.map((c, i) => (
              <div key={i} className="card-editorial p-4 flex flex-col justify-between">
                <div>
                  <div
                    className="w-full h-16 rounded-lg mb-3 border border-ink-10 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  ></div>
                  <h4 className="text-sm font-bold text-[#3c3a39]">{c.name}</h4>
                  <span className="font-mono text-xs text-ink-60 block mt-0.5">{c.hex}</span>
                </div>
                <div className="mt-3 pt-2 border-t border-ink-5 text-[11px] text-ink-40 font-mono">
                  {c.token}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="card-editorial p-8">
          <h2 className="text-2xl font-bold text-[#3c3a39] mb-4">Typography Standards</h2>
          <div className="space-y-6 text-sm text-ink-80">
            <div>
              <span className="font-mono text-xs text-ink-60 block mb-1">
                Primary Body &amp; Headings Font
              </span>
              <p className="text-2xl font-bold text-[#3c3a39]">
                Suisse Int&apos;l — Clean, type-design grade grotesque sans-serif.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-ink-60 block mb-1">
                Eyebrows, Path-Style Labels &amp; Code
              </span>
              <p className="font-mono text-base text-[#3c3a39]">
                Suisse Int&apos;l Mono — Used for signature &quot;/slash-prefix&quot; eyebrows and financial metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
