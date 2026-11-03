import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-ink-10 pt-16 pb-12 mt-20 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-ink-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#3c3a39] flex items-center justify-center text-[#fefefe] font-mono font-bold text-sm">
                PM
              </div>
              <span className="font-sans font-bold tracking-tight text-xl text-[#3c3a39]">
                PROP MARK
              </span>
            </Link>
            <p className="text-ink-60 text-sm max-w-sm leading-relaxed">
              Street-level Australian property intelligence, capital growth forecasting, and automated valuation models synthesized from 25 years of transactional data, ABS Census, and local council planning registers.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs text-ink-60">G-NAF & REA Live Data Feeds Connected</span>
            </div>
          </div>

          {/* Col 1: Platform & Tools */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow-mono">/intelligence suite</span>
            <ul className="flex flex-col gap-2 text-sm text-ink-80">
              <li>
                <Link href="/suburb-finder" className="hover:text-black transition-colors">
                  Suburb Screener & Matrix
                </Link>
              </li>
              <li>
                <Link href="/property-finder" className="hover:text-black transition-colors">
                  Property Valuation Explorer
                </Link>
              </li>
              <li>
                <Link href="/region-reports" className="hover:text-black transition-colors">
                  Capital City & Regional Reports
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-black transition-colors">
                  Investor & Agency Plans
                </Link>
              </li>
              <li>
                <Link href="/definitions" className="hover:text-black transition-colors">
                  Property Data Dictionary
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Suburb Reports Backlinks */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow-mono">/suburb reports</span>
            <ul className="flex flex-col gap-2 text-sm text-ink-80">
              <li>
                <Link href="/suburb-reports/surry-hills-nsw-2010" className="hover:text-black transition-colors">
                  Surry Hills NSW 2010
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/bondi-nsw-2026" className="hover:text-black transition-colors">
                  Bondi NSW 2026
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/richmond-vic-3121" className="hover:text-black transition-colors">
                  Richmond VIC 3121
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/new-farm-qld-4005" className="hover:text-black transition-colors">
                  New Farm QLD 4005
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/fremantle-wa-6160" className="hover:text-black transition-colors">
                  Fremantle WA 6160
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/norwood-sa-5067" className="hover:text-black transition-colors">
                  Norwood SA 5067
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/chatswood-nsw-2067" className="hover:text-black transition-colors">
                  Chatswood NSW 2067
                </Link>
              </li>
              <li>
                <Link href="/suburb-reports/blacktown-nsw-2148" className="hover:text-black transition-colors">
                  Blacktown NSW 2148
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Legal */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow-mono">/research & legal</span>
            <ul className="flex flex-col gap-2 text-sm text-ink-80">
              <li>
                <Link href="/compare" className="hover:text-black transition-colors">
                  Side-by-Side Comparison
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About Prop Mark & REA Data
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-black transition-colors">
                  Investor Academy & Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black transition-colors">
                  Market Analyses & Reports
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-black transition-colors">
                  Brand Guidelines & Design
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Contact & Consulting
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-black transition-colors">
                  Financial Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-40">
          <p>© {new Date().getFullYear()} PROP MARK Pty Ltd. Australian Property Data Engine. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Data Sources: CoreLogic, REA Group, ABS Census 2021/2026, ACARA, Geocoded National Address File (G-NAF).</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
