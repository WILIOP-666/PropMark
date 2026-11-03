"use client";

import { useState } from "react";
import Link from "next/link";
import { Printer, Share2, Scale, Check } from "lucide-react";

interface ReportActionBarProps {
  suburbSlug: string;
  suburbName: string;
}

export default function ReportActionBar({ suburbSlug, suburbName }: ReportActionBarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 no-print">
      <button
        onClick={handlePrint}
        className="btn-pill-ghost text-xs py-1.5 px-3.5 flex items-center gap-1.5 hover:bg-ink-10 transition-colors"
        title="Print Due Diligence Pack or Save as PDF"
      >
        <Printer className="w-3.5 h-3.5 text-ink-60" />
        <span>Export PDF Pack</span>
      </button>

      <button
        onClick={handleShare}
        className="btn-pill-ghost text-xs py-1.5 px-3.5 flex items-center gap-1.5 hover:bg-ink-10 transition-colors"
        title="Copy Link to Share"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Share2 className="w-3.5 h-3.5 text-ink-60" />}
        <span>{copied ? "Link Copied!" : "Share"}</span>
      </button>

      <Link
        href={`/compare?suburbs=${suburbSlug}`}
        className="btn-pill-ghost text-xs py-1.5 px-3.5 flex items-center gap-1.5 hover:bg-ink-10 transition-colors"
      >
        <Scale className="w-3.5 h-3.5 text-ink-60" />
        <span>Compare Market</span>
      </Link>
    </div>
  );
}
