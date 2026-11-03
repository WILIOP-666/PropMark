"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, BookOpen, Calculator, Info } from "lucide-react";
import { GLOSSARY_TERMS } from "../../lib/data/glossaryData";

export default function DefinitionsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Investment", "Demographics", "Zoning & Planning", "Valuation"];

  const filteredTerms = GLOSSARY_TERMS.filter((t) => {
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (selectedCategory !== "ALL" && t.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow-mono text-xs">/property data encyclopedia</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-3">
          Australian Real Estate Definitions &amp; Formulas
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-3xl leading-relaxed">
          The definitive technical reference guide for Australian property metrics, ABS Census indicators, planning zoning terminology, and financial cash flow formulas.
        </p>
      </div>

      {/* Controls */}
      <div className="card-editorial p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-ink-40 absolute left-3 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search definitions (e.g. Yield, AVM, ICSEA)..."
              className="w-full bg-surface-light border border-ink-15 rounded-xl pl-9 pr-3 py-2 text-sm text-ink focus:outline-none focus:border-ink-80"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#3c3a39] text-[#fefefe]"
                    : "bg-surface-light border border-ink-10 text-ink-80 hover:bg-ink-10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((term) => (
          <div key={term.slug} className="card-editorial p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="eyebrow-mono text-xs">/{term.category.toLowerCase()}</span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{term.term}</h3>
              <p className="text-xs text-ink-80 leading-relaxed mb-4">
                {term.definition}
              </p>

              {term.formula && (
                <div className="p-3 bg-surface-light rounded-lg border border-ink-10 font-mono text-xs text-ink mb-3">
                  <span className="text-[10px] text-ink-40 uppercase block mb-0.5">Formula</span>
                  <code>{term.formula}</code>
                </div>
              )}

              <div className="text-xs text-ink-60 space-y-1">
                <span className="font-semibold text-ink-80 block">Investment Significance:</span>
                <p className="leading-relaxed">{term.significance}</p>
              </div>
            </div>

            {term.benchmarkRule && (
              <div className="mt-4 pt-3 border-t border-ink-10 text-[11px] font-mono text-accent-blue">
                Rule of Thumb: {term.benchmarkRule}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
