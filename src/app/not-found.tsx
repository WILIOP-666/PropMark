import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#fefcf5]">
      <div className="card-editorial p-8 max-w-lg w-full text-center">
        <div className="w-12 h-12 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center mx-auto mb-4">
          <Compass className="w-6 h-6" />
        </div>
        <span className="eyebrow-mono text-xs">/404 — cadastre boundary not found</span>
        <h2 className="text-2xl font-bold text-[#3c3a39] mt-1 mb-3">
          Location Not In Statutory Register
        </h2>
        <p className="text-sm text-ink-60 leading-relaxed mb-6">
          The requested Australian suburb, spatial cadastre polygon, or property assessment could not be located in the statutory database.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-editorial-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to National Overview</span>
          </Link>
          <Link
            href="/suburb-finder"
            className="btn-editorial-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <span>Search 586 Suburbs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
