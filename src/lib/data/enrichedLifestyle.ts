import lifestyleRaw from "./crawledPeopleLifestyle.json";

export interface CrawledLifestyle {
  slug: string;
  url: string;
  population?: number;
  medianAge?: number;
  householdIncome?: number;
  familiesPct?: number;
  uniGraduatesPct?: number;
  diversityPct?: number;
}

export const CRAWLED_LIFESTYLE: CrawledLifestyle[] = lifestyleRaw as CrawledLifestyle[];

export function getLifestyleBySlug(slug: string): CrawledLifestyle | undefined {
  // Try exact match, then try without mbmap_ prefix
  let result = CRAWLED_LIFESTYLE.find((l) => l.slug === slug);
  if (!result) {
    const cleanSlug = slug.replace("mbmap_", "");
    result = CRAWLED_LIFESTYLE.find((l) => l.slug === cleanSlug || l.slug.includes(cleanSlug));
  }
  return result;
}
