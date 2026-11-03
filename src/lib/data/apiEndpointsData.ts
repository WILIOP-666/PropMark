import { ApiEndpointDoc } from "../types";

export const API_CATALOG: ApiEndpointDoc[] = [
  {
    path: "/api/v1/properties/valuation/avm",
    method: "GET",
    category: "Valuation",
    summary: "Automated Valuation Model (AVM) with Confidence Bands",
    description: "Computes instant real-time market valuation for any Australian residential property using hedonic regression, repeat sales data, and localized mesh-block comparables.",
    parameters: [
      { name: "address", type: "string", required: true, description: "Full street address or G-NAF persistent identifier." },
      { name: "confidence_threshold", type: "number", required: false, description: "Minimum confidence score (0.0 to 1.0) acceptable." }
    ],
    responseExample: {
      status: "success",
      property: "142 Bourke Street, Surry Hills NSW 2010",
      avm_value: 2320000,
      value_low: 2200000,
      value_high: 2450000,
      confidence_score: 92,
      valuation_date: "2026-11-03",
      model_version: "v4.2-hedonic-hybrid"
    }
  },
  {
    path: "/api/v1/properties/comparables/cma-comp-set",
    method: "GET",
    category: "Valuation",
    summary: "Comparative Market Analysis (CMA) Nearest Neighbor Set",
    description: "Fetches algorithmic comp-set of the most mathematically similar recent sales within 1.5km, normalized for land size, bedrooms, condition, and sale age.",
    parameters: [
      { name: "property_id", type: "string", required: true, description: "Unique property identifier." },
      { name: "max_comps", type: "number", required: false, description: "Maximum number of comparables to return (default: 6)." }
    ],
    responseExample: {
      subject_property: "142 Bourke Street, Surry Hills NSW 2010",
      comparables: [
        { address: "138 Bourke St, Surry Hills", sale_price: 2280000, sale_date: "2026-08-14", similarity_index: 0.96 },
        { address: "91 Crown St, Surry Hills", sale_price: 2350000, sale_date: "2026-09-02", similarity_index: 0.93 },
        { address: "12 Fitzroy St, Surry Hills", sale_price: 2210000, sale_date: "2026-07-28", similarity_index: 0.91 }
      ]
    }
  },
  {
    path: "/api/v1/properties/risks/all",
    method: "GET",
    category: "Risks",
    summary: "Comprehensive Due Diligence Risk Overlay",
    description: "Evaluates environmental, structural, and infrastructure hazards including 1:100 yr flood contours, bushfire vegetation zones, flight paths, easements, and public housing concentration.",
    parameters: [
      { name: "property_id", type: "string", required: true, description: "Unique property identifier or coordinates." }
    ],
    responseExample: {
      flood_hazard: { risk_level: "None", annual_exceedance_prob_100yr: false },
      bushfire_hazard: { risk_level: "None", buffer_distance_meters: 4200 },
      flight_path_noise: { anec_contour: "<20 (Negligible)", curfew_exempt: false },
      easements: { identified: false, registered_dealings: 0 },
      public_housing_density_sa1_pct: 8.4,
      high_voltage_transmission_distance_m: 1450
    }
  },
  {
    path: "/api/v1/properties/development/zoning-code",
    method: "GET",
    category: "Planning",
    summary: "Local Environmental Plan (LEP) Zoning & Building Controls",
    description: "Returns statutory zoning classifications, maximum building height limits (FSR), heritage status, and permitted residential development uses.",
    parameters: [
      { name: "address", type: "string", required: true, description: "Street address or lot/plan number." }
    ],
    responseExample: {
      council: "City of Sydney",
      zoning_code: "R1",
      zoning_title: "General Residential",
      max_building_height_m: 12.0,
      floor_space_ratio: 1.5,
      heritage_conservation_area: true,
      subdivision_minimum_lot_sqm: 120
    }
  },
  {
    path: "/api/v1/suburbs/profile",
    method: "GET",
    category: "Suburbs",
    summary: "Deep Suburb Intelligence & Key Benchmark Summary",
    description: "Returns aggregated macroeconomic, demographic, livability, and investment performance metrics for any Australian suburb.",
    parameters: [
      { name: "slug", type: "string", required: true, description: "Suburb slug (e.g. surry-hills-nsw-2010)." }
    ],
    responseExample: {
      suburb: "Surry Hills",
      state: "NSW",
      postcode: "2010",
      overall_score: 92,
      median_house_price: 2180000,
      median_unit_price: 985000,
      gross_house_yield_pct: 3.1,
      capital_growth_12mo_pct: 7.4,
      capital_growth_5yr_pct: 38.6,
      vacancy_rate_pct: 1.4,
      abs_population: 16412
    }
  },
  {
    path: "/api/v1/suburbs/market/median-sale-price-series",
    method: "GET",
    category: "Suburbs",
    summary: "Multi-Year Historical Median Price Time Series",
    description: "Provides granular quarterly median sale prices and sales volumes spanning up to 20 years across house and unit dwelling classes.",
    parameters: [
      { name: "suburb_slug", type: "string", required: true, description: "Suburb slug identifier." },
      { name: "dwelling_type", type: "string", required: false, description: "house | unit | all" }
    ],
    responseExample: {
      suburb: "Surry Hills",
      dwelling_type: "house",
      series: [
        { year: 2020, median: 1650000, volume: 142 },
        { year: 2021, median: 1890000, volume: 168 },
        { year: 2022, median: 1980000, volume: 125 },
        { year: 2023, median: 2030000, volume: 139 },
        { year: 2024, median: 2110000, volume: 154 },
        { year: 2025, median: 2150000, volume: 160 },
        { year: 2026, median: 2180000, volume: 172 }
      ]
    }
  },
  {
    path: "/api/v1/suburbs/demographics/income",
    method: "GET",
    category: "Demographics",
    summary: "ABS Census Household Income & SEIFA Socioeconomic Indices",
    description: "Extracts fine-grained Australian Bureau of Statistics (ABS) household weekly income percentiles, mortgage stress levels, and Index of Relative Socio-economic Advantage and Disadvantage (IRSAD).",
    parameters: [
      { name: "suburb_slug", type: "string", required: true, description: "Target suburb slug." }
    ],
    responseExample: {
      median_weekly_household_income: 2580,
      state_comparison_pct: "+44% vs NSW Median",
      irsad_decile: 10,
      mortgage_stress_ratio_pct: 14.2,
      tertiary_education_pct: 62.8
    }
  },
  {
    path: "/api/v1/suburbs/schools/catchment",
    method: "GET",
    category: "Suburbs",
    summary: "School Enrolment Catchment Zones & Academic Rankings",
    description: "Maps designated public primary and high school catchment polygons, ICSEA (Index of Community Socio-Educational Advantage), and state NAPLAN academic percentiles.",
    parameters: [
      { name: "suburb_slug", type: "string", required: true, description: "Target suburb slug." }
    ],
    responseExample: {
      suburb: "Surry Hills",
      schools_count: 4,
      primary_catchment: "Bourke Street Public School (ICSEA: 1145, Rank: Top 12%)",
      secondary_catchment: "Sydney Boys High School / Sydney Girls High School"
    }
  },
  {
    path: "/api/v1/suburbs/development/da-list",
    method: "GET",
    category: "Planning",
    summary: "Live Development Applications (DA) & Construction Pipeline",
    description: "Real-time feed of council lodged, approved, and under-construction development applications, detailing proposed apartments, retail expansion, and capital expenditure.",
    parameters: [
      { name: "suburb_slug", type: "string", required: true, description: "Target suburb slug." },
      { name: "status", type: "string", required: false, description: "lodged | approved | under_construction" }
    ],
    responseExample: {
      total_active_das: 42,
      new_dwellings_in_pipeline: 380,
      major_civic_investments: [
        { title: "Wimbo Park Expansion & Light Rail Link", capex: 18500000, status: "Under Construction" },
        { title: "Heritage Brewery Conversion to Tech Precinct", capex: 42000000, status: "Approved" }
      ]
    }
  },
  {
    path: "/api/v1/geocode/address",
    method: "GET",
    category: "Geocode",
    summary: "G-NAF Australian Address Autocomplete & Standardizer",
    description: "Fast sub-20ms address resolution across all Australian official postal addresses, returning standard Geocoded National Address File coordinates and suburb identifiers.",
    parameters: [
      { name: "q", type: "string", required: true, description: "Search query string (e.g. 142 Bourke St)." },
      { name: "limit", type: "number", required: false, description: "Max suggestions (1-10)." }
    ],
    responseExample: {
      query: "142 Bourke",
      matches: [
        {
          formatted: "142 Bourke Street, Surry Hills NSW 2010",
          suburb_slug: "surry-hills-nsw-2010",
          lat: -33.8861,
          lng: 151.2117,
          type: "address"
        }
      ]
    }
  }
];
