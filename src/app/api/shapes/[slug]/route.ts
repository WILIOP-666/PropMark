import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "@/lib/data/enrichedSuburbs";

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

  // Fetch real boundary from OpenStreetMap Nominatim API
  try {
    const query = `${suburb.name}, ${suburb.state}, Australia`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&polygon_geojson=1&limit=1`;
    
    const res = await fetch(url, {
      headers: { "User-Agent": "PropMark-AU/1.0 (Reverse Engineered for PropMark)" },
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0 && data[0].geojson) {
        const geojson = data[0].geojson;
        let coords: [number, number][] = [];

        if (geojson.type === "Polygon") {
          coords = geojson.coordinates[0].map((p: any) => [p[1], p[0]] as [number, number]);
        } else if (geojson.type === "MultiPolygon") {
          coords = geojson.coordinates[0][0].map((p: any) => [p[1], p[0]] as [number, number]);
        }

        if (coords.length > 0) {
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
                  coordinates: [coords.map(([lat, lng]: [number, number]) => [lng, lat])],
                },
              },
            },
          });
        }
      }
    }
  } catch (e) {
    console.error("Failed to fetch boundary from OSM:", e);
  }

  // Fallback to local hardcoded boundaries if OSM fails (these are real extracted boundaries)
  const { OFFICIAL_MANLY_BOUNDARY, OFFICIAL_RICHMOND_VIC_BOUNDARY, OFFICIAL_GOSFORD_BOUNDARY, OFFICIAL_BELMONT_NORTH_BOUNDARY } = await import("@/lib/data/boundaryGeoData");

  let boundary = null;
  const nameLower = suburb.name.toLowerCase();
  if (nameLower.includes("manly")) boundary = OFFICIAL_MANLY_BOUNDARY;
  else if (nameLower.includes("richmond")) boundary = OFFICIAL_RICHMOND_VIC_BOUNDARY;
  else if (nameLower.includes("gosford")) boundary = OFFICIAL_GOSFORD_BOUNDARY;
  else if (nameLower.includes("belmont")) boundary = OFFICIAL_BELMONT_NORTH_BOUNDARY;

  if (boundary) {
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
