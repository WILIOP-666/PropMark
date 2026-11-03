"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center p-4 bg-background text-ink antialiased">
        <div className="card-editorial p-8 max-w-lg w-full text-center border border-ink-10 bg-surface rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4 border border-red-200">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-60">/global application boundary</span>
          <h2 className="text-2xl font-bold text-ink mt-1 mb-3">
            Critical Runtime Interruption
          </h2>
          <p className="text-sm text-ink-60 leading-relaxed mb-6">
            A fatal exception occurred in the root application tree. Please attempt to reset the session.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-lg bg-[#3c3a39] text-[#fefcf5] text-sm font-medium hover:bg-black transition-colors inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
