import { SuburbProfile } from "../types";
import { SUBURBS_DATABASE as BASE } from "./suburbsData";
import crawledRaw from "./crawledSuburbs.json";

interface CrawledSuburb {
  slug: string;
  medianHousePrice?: number;
  medianUnitPrice?: number;
  medianHouseRentWeek?: number;
  medianUnitRentWeek?: number;
  grossHouseYieldPct?: number;
  grossUnitYieldPct?: number;
  capitalGrowth12MoPct?: number;
  population?: number;
  crimeRate?: number;
  medianAge?: number;
  medianIncome?: number;
}

const crawledMap = new Map<string, CrawledSuburb>();
for (const c of crawledRaw as CrawledSuburb[]) {
  crawledMap.set(c.slug, c);
}

export const SUBURBS_DATABASE: SuburbProfile[] = BASE.map((sub) => {
  const c = crawledMap.get(sub.slug);
  if (!c) return sub;

  const merged: SuburbProfile = { ...sub };
  if (c.population) merged.summary = { ...merged.summary, population: c.population };
  merged.market = { ...merged.market };
  if (c.medianHousePrice) merged.market.medianHousePrice = c.medianHousePrice;
  if (c.medianUnitPrice) merged.market.medianUnitPrice = c.medianUnitPrice;
  if (c.medianHouseRentWeek) merged.market.medianHouseRentWeek = c.medianHouseRentWeek;
  if (c.medianUnitRentWeek) merged.market.medianUnitRentWeek = c.medianUnitRentWeek;
  if (c.grossHouseYieldPct) merged.market.grossHouseYieldPct = c.grossHouseYieldPct;
  if (c.grossUnitYieldPct) merged.market.grossUnitYieldPct = c.grossUnitYieldPct;
  if (c.capitalGrowth12MoPct) merged.market.capitalGrowth12MoPct = c.capitalGrowth12MoPct;
  merged.demographics = { ...merged.demographics };
  if (c.medianAge) merged.demographics.medianAge = c.medianAge;
  if (c.medianIncome) merged.demographics.medianHouseholdIncomeWeekly = c.medianIncome;
  return merged;
});

export function getEnrichmentStats() {
  const total = BASE.length;
  const enriched = BASE.filter((s) => crawledMap.has(s.slug)).length;
  return {
    totalSuburbs: total,
    crawledSuburbs: crawledMap.size,
    enrichedInDatabase: enriched,
    coveragePct: Math.round((enriched / total) * 100),
  };
}
