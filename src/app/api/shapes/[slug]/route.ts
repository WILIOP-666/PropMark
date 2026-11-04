import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "@/lib/data/enrichedSuburbs";
import osmBoundaries from "@/lib/data/osm-boundaries.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const suburb = SUBURBS_DATABASE.find(
    (s) => s.slug === slug || s.name.toLowerCase() === slug.toLowerCase()
  );

  if (!suburb) {
    return NextResponse.json(
      { status: "error", message: `Spatial boundary for '${slug}' not found` },
      { status: 404 }
    );
  }

  // Look up pre-fetched OSM boundary
  const boundary = (osmBoundaries as unknown as Record<string, [number, number][]>)[suburb.slug];

  if (boundary && boundary.length > 0) {
    return NextResponse.json({
      status: "success",
      data: {
        area_level: "suburb",
        area_name: suburb.name,
        state: suburb.state,
        centroid: suburb.coordinates,
        geojson: {
          type: "Feature",
          properties: {
            suburb: suburb.name,
            state: suburb.state,
            postcode: suburb.postcode,
            lga: suburb.lga,
            centroid: suburb.coordinates,
            area_sq_km: suburb.summary?.areaSqKm || 0,
          },
          geometry: {
            type: "Polygon",
            coordinates: [boundary.map(([lat, lng]) => [lng, lat])],
          },
        },
      },
    });
  }

  return NextResponse.json(
    { status: "error", message: `Spatial boundary for '${slug}' not found` },
    { status: 404 }
  );
}
