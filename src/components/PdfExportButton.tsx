"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

interface PdfExportButtonProps {
  suburbName: string;
  state: string;
}

export default function PdfExportButton({ suburbName, state }: PdfExportButtonProps) {
  const [generating, setGenerating] = useState(false);

  const handleExport = async () => {
    setGenerating(true);
    try {
      // Use browser print with optimized layout
      if (typeof window !== "undefined") {
        // Add print title
        const originalTitle = document.title;
        document.title = `${suburbName}, ${state} — Due Diligence Report — PropMark`;
        window.print();
        document.title = originalTitle;
      }
    } finally {
      setGenerating(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={generating}
      className="btn-pill-ghost text-xs py-1.5 px-3.5 flex items-center gap-1.5 hover:bg-ink-10 transition-colors disabled:opacity-50"
      title="Print Due Diligence Pack or Save as PDF"
    >
      <Printer className="w-3.5 h-3.5 text-ink-60" />
      <span>{generating ? "Generating..." : "Export PDF Pack"}</span>
    </button>
  );
}
