export interface SuburbMarketStats {
  medianHousePrice: number;
  medianUnitPrice: number;
  medianHouseRentWeek: number;
  medianUnitRentWeek: number;
  grossHouseYieldPct: number;
  grossUnitYieldPct: number;
  capitalGrowth12MoPct: number;
  capitalGrowth5YrPct: number;
  daysOnMarketHouse: number;
  daysOnMarketUnit: number;
  vacancyRatePct: number;
  auctionClearanceRatePct: number;
  stockOnMarketPct: number;
  transactionsLastYear: number;
  priceSeries: { year: number; housePrice: number; unitPrice: number }[];
  rentSeries: { year: number; houseRent: number; unitRent: number }[];
}

export interface SuburbScores {
  overallScore: number;
  affluenceScore: number;
  livabilityScore: number;
  hipsterScore: number;
  familyScore: number;
  tranquillityScore: number;
  convenienceScore: number;
}

export interface SuburbDemographics {
  medianAge: number;
  medianHouseholdIncomeWeekly: number;
  familyHouseholdsPct: number;
  singleHouseholdsPct: number;
  ancestry: { label: string; pct: number }[];
  educationTertiaryPct: number;
  professionalOccupationPct: number;
}

export interface SuburbSchool {
  name: string;
  type: "Primary" | "Secondary" | "Combined";
  sector: "Government" | "Catholic" | "Independent";
  icsea: number;
  naplanRank: number;
  distanceKm: number;
  catchment: boolean;
}

export interface SuburbPlanning {
  activeDaCount: number;
  majorProjectsCount: number;
  primaryZoning: string;
  zoningBreakdown: { code: string; description: string; pct: number }[];
}

export interface SuburbHazards {
  floodRisk: "None" | "Low" | "Moderate" | "High";
  bushfireRisk: "None" | "Low" | "Moderate" | "High";
  publicHousingPct: number;
  noiseImpact: "Low" | "Moderate" | "High";
  slopeTopography: "Flat" | "Gentle" | "Steep";
}

export interface SuburbCommute {
  trainTimeMins: number;
  drivingTimeMins: number;
  bikeTimeMins: number;
  walkScore: number;
}

export interface SuburbProfile {
  id: string;
  slug: string;
  name: string;
  state: "NSW" | "VIC" | "QLD" | "WA" | "SA" | "TAS" | "ACT" | "NT";
  postcode: string;
  lga: string;
  region: string;
  coordinates: { lat: number; lng: number };
  summary: {
    description: string;
    distanceToCbdKm: number;
    areaSqKm: number;
    population: number;
  };
  market: SuburbMarketStats;
  scores: SuburbScores;
  demographics: SuburbDemographics;
  schools: SuburbSchool[];
  planning: SuburbPlanning;
  hazards: SuburbHazards;
  commute: SuburbCommute;
  comparableSuburbs: string[];
  surroundingSuburbs: string[];
}

export interface PropertyListing {
  id: string;
  slug: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  propertyType: "House" | "Unit" | "Townhouse" | "Duplex";
  bedrooms: number;
  bathrooms: number;
  carSpaces: number;
  landAreaSqm: number;
  buildingAreaSqm: number;
  yearBuilt: number;
  estimatedValueMin: number;
  estimatedValueMax: number;
  avmValue: number;
  confidenceScore: number; // 0-100%
  lastSalePrice: number;
  lastSaleDate: string;
  rentalEstimateWeekly: number;
  grossYieldPct: number;
  zoningCode: string;
  councilLga: string;
  imageUrl: string;
  features: string[];
}

export interface ApiEndpointDoc {
  path: string;
  method: "GET" | "POST";
  category: "Properties" | "Suburbs" | "Valuation" | "Demographics" | "Risks" | "Planning" | "Geocode";
  summary: string;
  description: string;
  parameters: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  responseExample: Record<string, any>;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: "Investment" | "Demographics" | "Zoning & Planning" | "Risk & Hazards" | "Valuation";
  definition: string;
  significance: string;
  formula?: string;
  benchmarkRule?: string;
}
