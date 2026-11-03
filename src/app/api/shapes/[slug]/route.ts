import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../../lib/data/suburbsData";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const suburb = SUBURBS_DATABASE.find(
    (s) => s.slug === slug || s.name.toLowerCase() === slug.toLowerCase()
  );

  if (!suburb) {
    return NextResponse.json(
      { status: "error", message: `Spatial boundary for '${slug}' not found` },
      { status: 404 }
    );
  }

  const { lat, lng } = suburb.coordinates;
  const deltaLat = 0.015;
  const deltaLng = 0.019;

  // Standard GeoJSON Feature Polygon (lng, lat order as per RFC 7946)
  const geojson = {
    type: "Feature",
    properties: {
      suburb: suburb.name,
      state: suburb.state,
      postcode: suburb.postcode,
      lga: suburb.lga,
      centroid: { lat, lng },
      area_sq_km: suburb.summary.areaSqKm,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [lng - deltaLng, lat + deltaLat],
          [lng + deltaLng * 0.5, lat + deltaLat * 1.2],
          [lng + deltaLng * 1.4, lat + deltaLat * 0.3],
          [lng + deltaLng * 0.9, lat - deltaLat * 0.9],
          [lng - deltaLng * 0.6, lat - deltaLat * 1.1],
          [lng - deltaLng * 1.2, lat - deltaLat * 0.2],
          [lng - deltaLng, lat + deltaLat], // Closed ring
        ],
      ],
    },
  };

  return NextResponse.json({
    status: "success",
    data: {
      area_level: "suburb",
      area_name: suburb.name,
      state: suburb.state,
      centroid: { lat, lng },
      geojson: geojson,
    },
  });
}
