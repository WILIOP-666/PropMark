import { NextResponse } from "next/server";
import { API_CATALOG } from "../../../lib/data/apiEndpointsData";

export async function GET() {
  return NextResponse.json({
    status: "success",
    version: "1.0.0",
    service: "PROP MARK Australian Property Intelligence API",
    total_endpoints: API_CATALOG.length,
    endpoints: API_CATALOG,
  });
}
