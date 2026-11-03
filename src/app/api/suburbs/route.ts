import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../lib/data/enrichedSuburbs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase();
  const state = searchParams.get("state")?.toUpperCase();
  const minYield = searchParams.get("minYield") ? Number(searchParams.get("minYield")) : null;
  const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null;
  const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : 50;

  let results = [...SUBURBS_DATABASE];

  if (q) {
    results = results.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.postcode.includes(q) ||
        s.lga.toLowerCase().includes(q)
    );
  }

  if (state && state !== "ALL") {
    results = results.filter((s) => s.state === state);
  }

  if (minYield !== null) {
    results = results.filter((s) => s.market.grossHouseYieldPct >= minYield);
  }

  if (maxPrice !== null) {
    results = results.filter((s) => s.market.medianHousePrice <= maxPrice);
  }

  return NextResponse.json({
    status: "success",
    count: results.length,
    data: results.slice(0, limit),
  });
}
