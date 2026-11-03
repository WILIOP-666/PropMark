import Link from "next/link";
import { TrendingUp, ArrowUpRight, MapPin, Building, Users } from "lucide-react";
import { formatCurrency, formatPercent } from "../../lib/utils";

export default function RegionReportsPage() {
  const regions = [
    {
      name: "Greater Sydney",
      state: "NSW",
      medianHouse: 1460000,
      medianUnit: 820000,
      growth12Mo: 7.2,
      growth5Yr: 39.4,
      rentalYield: 3.2,
      vacancyRate: 1.3,
      population: 5312000,
      keyDrivers: "Metro West expansion, Western Sydney Aerotropolis, global financial hub demand.",
      topSuburbs: ["Surry Hills", "Bondi", "Chatswood", "Parramatta"]
    },
    {
      name: "Greater Melbourne",
      state: "VIC",
      medianHouse: 935000,
      medianUnit: 610000,
      growth12Mo: 4.8,
      growth5Yr: 24.2,
      rentalYield: 3.7,
      vacancyRate: 1.6,
      population: 5078000,
      keyDrivers: "Metro Tunnel commencement, international student recovery, strong inner-east demand.",
      topSuburbs: ["Richmond", "South Yarra", "Brunswick", "Carlton"]
    },
    {
      name: "Greater Brisbane",
      state: "QLD",
      medianHouse: 920000,
      medianUnit: 585000,
      growth12Mo: 12.8,
      growth5Yr: 62.4,
      rentalYield: 4.4,
      vacancyRate: 0.9,
      population: 2628000,
      keyDrivers: "2032 Olympic Games infrastructure boom, sustained interstate migration from NSW/VIC.",
      topSuburbs: ["New Farm", "Paddington", "Teneriffe", "Bulimba"]
    },
    {
      name: "Greater Perth",
      state: "WA",
      medianHouse: 780000,
      medianUnit: 460000,
      growth12Mo: 16.4,
      growth5Yr: 68.2,
      rentalYield: 5.1,
      vacancyRate: 0.6,
      population: 2224000,
      keyDrivers: "Mining sector revenues, highest national rental yields, acute housing supply shortage.",
      topSuburbs: ["Fremantle", "Cottesloe", "Subiaco", "Scarborough"]
    },
    {
      name: "Greater Adelaide",
      state: "SA",
      medianHouse: 815000,
      medianUnit: 510000,
      growth12Mo: 13.6,
      growth5Yr: 64.1,
      rentalYield: 4.2,
      vacancyRate: 0.7,
      population: 1418000,
      keyDrivers: "Defence shipbuilding contracts (AUKUS), medical precinct expansion, tight housing stock.",
      topSuburbs: ["Norwood", "Unley", "North Adelaide", "Glenelg"]
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
      <div className="mb-10">
        <span className="eyebrow-mono text-xs">/macro market comparison</span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#3c3a39] mb-3">
          Australian Capital City Regional Reports
        </h1>
        <p className="text-sm sm:text-base text-ink-60 max-w-3xl leading-relaxed">
          State-by-state economic indicators, interstate migration flows, infrastructure pipelines, and comparative dwelling yields across Australia&apos;s primary housing markets.
        </p>
      </div>

      <div className="space-y-6">
        {regions.map((reg, idx) => (
          <div key={idx} className="card-editorial p-6 hover:border-ink-40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-ink-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="eyebrow-mono text-xs">/{reg.state} REGION</span>
                  <span className="text-xs font-mono text-ink-60 bg-ink-5 px-2 py-0.5 rounded">
                    Pop: {(reg.population / 1000000).toFixed(2)}M
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#3c3a39]">{reg.name}</h3>
                <p className="text-xs text-ink-60 mt-1 max-w-xl">
                  {reg.keyDrivers}
                </p>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
                  <span className="text-[10px] font-mono text-ink-60 block">Median House</span>
                  <span className="text-base font-bold font-mono text-[#3c3a39]">
                    {formatCurrency(reg.medianHouse)}
                  </span>
                  <span className="text-[10px] text-accent-emerald flex items-center gap-0.5 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    +{reg.growth12Mo}%
                  </span>
                </div>

                <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
                  <span className="text-[10px] font-mono text-ink-60 block">Median Unit</span>
                  <span className="text-base font-bold font-mono text-[#3c3a39]">
                    {formatCurrency(reg.medianUnit)}
                  </span>
                  <span className="text-[10px] text-ink-60 font-mono">5Y: +{reg.growth5Yr}%</span>
                </div>

                <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
                  <span className="text-[10px] font-mono text-ink-60 block">Gross Yield</span>
                  <span className="text-base font-bold font-mono text-[#3c3a39]">
                    {reg.rentalYield}%
                  </span>
                  <span className="text-[10px] text-ink-60 font-mono">Metro Avg</span>
                </div>

                <div className="p-3 bg-surface-light rounded-xl border border-ink-5">
                  <span className="text-[10px] font-mono text-ink-60 block">Vacancy Rate</span>
                  <span className="text-base font-bold font-mono text-accent-emerald">
                    {reg.vacancyRate}%
                  </span>
                  <span className="text-[10px] text-accent-emerald font-mono">Tight Market</span>
                </div>
              </div>
            </div>

            {/* Benchmark Suburbs */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="eyebrow-mono text-xs mr-1">/benchmark suburbs:</span>
                {reg.topSuburbs.map((sub, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-surface-light border border-ink-10 text-ink-80 font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <Link
                href={`/suburb-finder?state=${reg.state}`}
                className="btn-pill-dark text-xs py-2 px-4 group shrink-0"
              >
                <span>Filter {reg.name} Suburbs</span>
                <ArrowUpRight className="w-3.5 h-3.5 shift-arrow transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
