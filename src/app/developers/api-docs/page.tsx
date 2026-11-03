"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Shield, Zap, BookOpen, Key, Check, Copy } from "lucide-react";
import { API_CATALOG } from "../../../lib/data/apiEndpointsData";
import ApiEndpointCard from "../../../components/ApiEndpointCard";

export default function ApiDocsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  const categories = ["ALL", "Valuation", "Suburbs", "Demographics", "Planning", "Risks", "Geocode"];

  const filteredEndpoints = selectedCategory === "ALL"
    ? API_CATALOG
    : API_CATALOG.filter((ep) => ep.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCopyKey = () => {
    navigator.clipboard.writeText("pm_live_demo_984128f7a9");
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-ink-10 mb-3 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
          <span>REST API v1.0 • OPENAPI 3.1 SPECIFICATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          Developer API Documentation
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-3xl leading-relaxed">
          Comprehensive programmatic access to street-level Australian property valuations, suburb growth time-series, school catchment boundaries, council planning applications, and environmental risk ratings.
        </p>
      </div>

      {/* Authentication & Quickstart Block */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="card-editorial p-6 lg:col-span-2">
          <span className="eyebrow-mono text-xs">/authentication</span>
          <h3 className="text-lg font-bold text-[#3c3a39] mt-1 mb-2">
            API Key &amp; Bearer Token Authorization
          </h3>
          <p className="text-xs text-ink-60 leading-relaxed mb-4">
            All requests to the Prop Mark API must authenticate by providing your private API key in the standard HTTP <code className="bg-ink-10 px-1 py-0.5 rounded font-mono text-[#3c3a39]">Authorization</code> header.
          </p>

          <div className="p-3.5 bg-surface-light border border-ink-10 rounded-xl flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-ink-40">Bearer</span>
              <span className="text-[#3c3a39] font-bold">pm_live_demo_984128f7a9</span>
            </div>
            <button
              onClick={handleCopyKey}
              className="btn-pill-ghost text-xs py-1 px-3 ml-2 shrink-0"
            >
              {apiKeyCopied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{apiKeyCopied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        <div className="card-editorial p-6 flex flex-col justify-between">
          <div>
            <span className="eyebrow-mono text-xs">/sla &amp; limits</span>
            <h3 className="text-lg font-bold text-[#3c3a39] mt-1 mb-2">
              Performance Guarantees
            </h3>
            <ul className="space-y-2 text-xs text-ink-80">
              <li className="flex items-center justify-between">
                <span className="text-ink-60">Global Edge Latency:</span>
                <span className="font-mono font-bold text-accent-emerald">&lt;24ms avg</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink-60">Rate Limits (Pro):</span>
                <span className="font-mono font-bold">120 req / sec</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink-60">Uptime SLA:</span>
                <span className="font-mono font-bold text-accent-blue">99.99%</span>
              </li>
            </ul>
          </div>
          <Link
            href="/pricing"
            className="btn-pill-dark text-xs py-2 w-full justify-center mt-4"
          >
            Upgrade API Tier
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-ink-10">
        <span className="eyebrow-mono text-xs mr-2">/filter by route:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 ${
              selectedCategory === cat
                ? "bg-[#3c3a39] text-[#fefefe]"
                : "bg-surface border border-ink-15 text-ink-80 hover:bg-ink-10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Endpoints List */}
      <div className="space-y-6">
        {filteredEndpoints.map((ep, idx) => (
          <ApiEndpointCard key={idx} endpoint={ep} />
        ))}
      </div>
    </div>
  );
}
