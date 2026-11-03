import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../../lib/data/suburbsData";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Resolve suburb to find its clean name & state
  const suburb = SUBURBS_DATABASE.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  const suburbClean = suburb
    ? suburb.name.toLowerCase().replace(/[^a-z0-9]/g, "_")
    : slug.split("-")[0].replace(/[^a-z0-9]/g, "_");

  const stateClean = suburb
    ? suburb.state.toLowerCase()
    : (slug.includes("-nsw-") ? "nsw" : slug.includes("-vic-") ? "vic" : slug.includes("-qld-") ? "qld" : "nsw");

  const possibleUrls = [
    `https://www.microburbs.com.au/cdn/suburb-vg300/${suburbClean}_${stateClean}.jpg`,
    `https://www.microburbs.com.au/cdn/suburb-vg300/${suburbClean.replace(/_/g, "-")}_${stateClean}.jpg`,
    `https://www.microburbs.com.au/cdn/suburb-vg300/${suburbClean}.jpg`
  ];

  for (const upstreamUrl of possibleUrls) {
    try {
      const resp = await fetch(upstreamUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
          "Referer": "https://www.microburbs.com.au/",
          "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
        cache: "force-cache",
      });

      if (resp.ok && resp.status === 200) {
        const buffer = await resp.arrayBuffer();
        const contentType = resp.headers.get("content-type") || "image/jpeg";

        return new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=2592000, immutable",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch {
      // Continue to next URL attempt
    }
  }

  // Fallback to high-resolution Australian coastal / urban architectural photography
  const fallbackUrl = "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1600&q=80";
  try {
    const fallbackResp = await fetch(fallbackUrl);
    const fallbackBuffer = await fallbackResp.arrayBuffer();
    return new NextResponse(fallbackBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=604800",
      },
    });
  } catch (err: any) {
    return new NextResponse("Image Unavailable", { status: 404 });
  }
}
