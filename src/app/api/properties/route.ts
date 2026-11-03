import { NextRequest, NextResponse } from "next/server";
import { PROPERTIES_DATABASE } from "../../../lib/data/propertiesData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase();
  const suburb = searchParams.get("suburb")?.toLowerCase();
  const propertyType = searchParams.get("type");
  const minBeds = searchParams.get("minBeds") ? Number(searchParams.get("minBeds")) : null;

  let results = [...PROPERTIES_DATABASE];

  if (q) {
    results = results.filter(
      (p) =>
        p.address.toLowerCase().includes(q) ||
        p.suburb.toLowerCase().includes(q) ||
        p.postcode.includes(q)
    );
  }

  if (suburb) {
    results = results.filter((p) => p.suburb.toLowerCase() === suburb);
  }

  if (propertyType && propertyType !== "ALL") {
    results = results.filter((p) => p.propertyType === propertyType);
  }

  if (minBeds !== null) {
    results = results.filter((p) => p.bedrooms >= minBeds);
  }

  return NextResponse.json({
    status: "success",
    count: results.length,
    data: results,
  });
}
