"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, ArrowUpRight, BarChart3, Database, ShieldCheck, MapPin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-ink-10 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-ink text-background flex items-center justify-center font-mono font-bold text-base shadow-subtle group-hover:opacity-90 transition-opacity">
            PM
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-xl text-ink">
              PROP MARK
            </span>
            <span className="font-mono text-[10px] text-ink-60 uppercase tracking-widest -mt-1">
              AU Property Intelligence
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/suburb-finder"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Suburb Finder
          </Link>
          <Link
            href="/compare"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Compare Markets
          </Link>
          <Link
            href="/property-finder"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Property Explorer
          </Link>
          <Link
            href="/region-reports"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Regions
          </Link>
          <Link
            href="/definitions"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Data Dictionary
          </Link>
          <Link
            href="/pricing"
            className="text-[14px] font-medium text-ink hover:text-black dark:hover:text-white transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/compare"
            className="btn-pill-ghost text-[13px] py-2 px-4"
          >
            Compare 2-3 Suburbs
          </Link>
          <Link
            href="/suburb-finder"
            className="btn-pill-dark text-[13px] py-2 px-5 group"
          >
            <span>Launch Screener</span>
            <ArrowUpRight className="w-3.5 h-3.5 shift-arrow transition-transform" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink hover:bg-ink-5 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink-10 bg-surface px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link
            href="/suburb-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1"
          >
            Suburb Finder
          </Link>
          <Link
            href="/property-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1"
          >
            Property Explorer
          </Link>
          <Link
            href="/region-reports"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1"
          >
            Region Analytics
          </Link>
          <Link
            href="/developers/api-docs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1 flex items-center justify-between"
          >
            <span>Developer API Docs</span>
            <span className="px-2 py-0.5 text-xs font-mono bg-[#817fff26] text-accent-lavender rounded">v1.0</span>
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1"
          >
            Pricing & Plans
          </Link>
          <Link
            href="/definitions"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-ink py-1"
          >
            Property Dictionary
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/suburb-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-dark w-full py-2.5 justify-center"
            >
              Launch Screener
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
