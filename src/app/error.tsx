"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Segment Error Caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#fefcf5]">
      <div className="card-editorial p-8 max-w-lg w-full text-center">
        <div className="w-12 h-12 rounded-full bg-accent-orange/10 text-accent-orange flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <span className="eyebrow-mono text-xs">/spatial engine error</span>
        <h2 className="text-2xl font-bold text-[#3c3a39] mt-1 mb-3">
          Temporary Rendering Disruption
        </h2>
        <p className="text-sm text-ink-60 leading-relaxed mb-6">
          The property analytics or spatial geometry service encountered an unexpected error while evaluating cadastre boundaries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="btn-editorial-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Re-evaluate Page</span>
          </button>
          <Link
            href="/"
            className="btn-editorial-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
