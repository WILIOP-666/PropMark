import glossaryRaw from "./crawledDefinitions.json";

export interface CrawledDefinition {
  slug: string;
  term: string;
  definition: string;
  url: string;
}

export const CRAWLED_DEFINITIONS: CrawledDefinition[] = glossaryRaw as CrawledDefinition[];

export function getDefinitionBySlug(slug: string): CrawledDefinition | undefined {
  return CRAWLED_DEFINITIONS.find((d) => d.slug === slug);
}

export function searchDefinitions(query: string): CrawledDefinition[] {
  const q = query.toLowerCase();
  return CRAWLED_DEFINITIONS.filter(
    (d) => d.term.toLowerCase().includes(q) || d.definition.toLowerCase().includes(q)
  );
}
