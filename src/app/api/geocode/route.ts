import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../lib/data/enrichedSuburbs";
import { PROPERTIES_DATABASE } from "../../../lib/data/propertiesData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase();

  if (!q || q.length < 2) {
    return NextResponse.json({
      status: "success",
      query: q || "",
      matches: [],
    });
  }

  const suburbMatches = SUBURBS_DATABASE.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.postcode.includes(q) ||
      s.lga.toLowerCase().includes(q)
  ).map((s) => ({
    type: "suburb",
    label: `${s.name}, ${s.state} ${s.postcode}`,
    slug: s.slug,
    suburb: s.name,
    state: s.state,
    postcode: s.postcode,
    lat: s.coordinates.lat,
    lng: s.coordinates.lng,
  }));

  const propertyMatches = PROPERTIES_DATABASE.filter(
    (p) =>
      p.address.toLowerCase().includes(q) ||
      p.suburb.toLowerCase().includes(q)
  ).map((p) => ({
    type: "property",
    label: `${p.address}, ${p.suburb} ${p.state} ${p.postcode}`,
    slug: p.slug,
    propertyId: p.id,
    suburb: p.suburb,
  }));

  return NextResponse.json({
    status: "success",
    query: q,
    matches: [...suburbMatches, ...propertyMatches].slice(0, 10),
  });
}
