import { NextRequest, NextResponse } from "next/server";
import { PROPERTIES_DATABASE } from "../../../../lib/data/propertiesData";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const property = PROPERTIES_DATABASE.find(
    (p) => p.id === id || p.slug === id
  );

  if (!property) {
    return NextResponse.json(
      { status: "error", message: `Property '${id}' not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "success",
    data: property,
  });
}
