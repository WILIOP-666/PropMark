import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="max-w-2xl mb-10">
        <span className="eyebrow-mono text-xs">/get in touch</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-3">
          Contact Prop Mark
        </h1>
        <p className="text-sm sm:text-base text-ink-60 leading-relaxed">
          Questions regarding our enterprise data feeds, custom GIS polygon layers, or agency subscriptions? Our technical team is ready to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card-editorial p-6 space-y-6">
          <div>
            <h3 className="text-base font-bold text-ink mb-4">Direct Inquiries</h3>
            <div className="space-y-4 text-xs text-ink-80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-blue mt-0.5" />
                <div>
                  <span className="font-semibold block text-ink">Technical &amp; Data API</span>
                  <span className="font-mono text-ink-60">api@propmark.com.au</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-emerald mt-0.5" />
                <div>
                  <span className="font-semibold block text-ink">Client Services</span>
                  <span className="font-mono text-ink-60">+61 2 8999 4120</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-orange mt-0.5" />
                <div>
                  <span className="font-semibold block text-ink">Sydney Headquarters</span>
                  <span className="text-ink-60">Level 14, 175 Pitt Street, Sydney NSW 2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="card-editorial p-8 lg:col-span-2">
          <h3 className="text-lg font-bold text-ink mb-4">Send a Message</h3>
          <form className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-ink-60 font-mono block mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-surface-light border border-ink-15 rounded-xl p-3 text-sm text-ink focus:outline-none focus:border-ink-80"
                />
              </div>
              <div>
                <label className="text-ink-60 font-mono block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="sarah@agency.com.au"
                  className="w-full bg-surface-light border border-ink-15 rounded-xl p-3 text-sm text-ink focus:outline-none focus:border-ink-80"
                />
              </div>
            </div>

            <div>
              <label className="text-ink-60 font-mono block mb-1">Inquiry Type</label>
              <select className="w-full bg-surface-light border border-ink-15 rounded-xl p-3 text-xs text-ink focus:outline-none">
                <option>Enterprise REST API Access</option>
                <option>Buyer&apos;s Agent Agency Subscription</option>
                <option>Data Correction / G-NAF Feedback</option>
                <option>Partnerships &amp; Media</option>
              </select>
            </div>

            <div>
              <label className="text-ink-60 font-mono block mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Describe your organization's property data requirements..."
                className="w-full bg-surface-light border border-ink-15 rounded-xl p-3 text-sm text-ink focus:outline-none focus:border-ink-80"
              ></textarea>
            </div>

            <button type="button" className="btn-pill-dark text-xs py-3 px-6">
              <span>Submit Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
