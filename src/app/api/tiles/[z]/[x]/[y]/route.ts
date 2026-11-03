import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { z: string; x: string; y: string } }
) {
  const { z, x } = params;
  let { y } = params;
  
  // Clean y from extension e.g. 9784.png or 9784@2x.png
  y = y.replace(/(@2x)?\.png$/, "");

  const upstreamUrl = `https://www.microburbs.com.au/cdn/basemap/light_all/${z}/${x}/${y}@2x.png`;

  try {
    const res = await fetch(upstreamUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Referer": "https://www.microburbs.com.au/",
      },
      next: { revalidate: 86400 * 30 }, // Cache for 30 days
    });

    if (!res.ok) {
      // Fallback to OpenStreetMap Standard Tile if Microburbs tile fails
      const osmFallback = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
      const fallbackRes = await fetch(osmFallback, {
        headers: { "User-Agent": "PropMark/1.0" },
      });
      const buffer = await fallbackRes.arrayBuffer();
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=86400, immutable",
        },
      });
    }

    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=2592000, immutable",
      },
    });
  } catch (error) {
    return new NextResponse("Tile fetch error", { status: 502 });
  }
}
