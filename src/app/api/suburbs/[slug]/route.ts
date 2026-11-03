import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../../lib/data/suburbsData";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const suburb = SUBURBS_DATABASE.find((s) => s.slug === slug);

  if (!suburb) {
    return NextResponse.json(
      { status: "error", message: `Suburb with slug '${slug}' not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "success",
    data: suburb,
  });
}
