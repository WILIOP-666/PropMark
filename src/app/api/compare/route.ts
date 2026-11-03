import { NextRequest, NextResponse } from "next/server";
import { SUBURBS_DATABASE } from "../../../lib/data/suburbsData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slugsParam = searchParams.get("slugs") || searchParams.get("suburbs");

  if (!slugsParam) {
    return NextResponse.json(
      { status: "error", message: "Missing 'slugs' parameter. e.g. ?slugs=bondi-beach-nsw-2026,surry-hills-nsw-2010" },
      { status: 400 }
    );
  }

  const slugs = slugsParam.split(",").map((s) => s.trim().toLowerCase());
  const matchedSuburbs = SUBURBS_DATABASE.filter((sub) =>
    slugs.includes(sub.slug.toLowerCase()) || slugs.includes(sub.name.toLowerCase())
  );

  if (matchedSuburbs.length === 0) {
    return NextResponse.json(
      { status: "error", message: "None of the specified suburbs were found in the database" },
      { status: 404 }
    );
  }

  // Calculate winners per category
  const highestYield = [...matchedSuburbs].sort(
    (a, b) => b.market.grossHouseYieldPct - a.market.grossHouseYieldPct
  )[0];

  const highestGrowth = [...matchedSuburbs].sort(
    (a, b) => b.market.capitalGrowth12MoPct - a.market.capitalGrowth12MoPct
  )[0];

  const lowestPrice = [...matchedSuburbs].sort(
    (a, b) => a.market.medianHousePrice - b.market.medianHousePrice
  )[0];

  const highestScore = [...matchedSuburbs].sort(
    (a, b) => b.scores.overallScore - a.scores.overallScore
  )[0];

  return NextResponse.json({
    status: "success",
    count: matchedSuburbs.length,
    suburbs: matchedSuburbs,
    verdict: {
      best_yield: { suburb: highestYield.name, value: `${highestYield.market.grossHouseYieldPct}%` },
      best_capital_growth: { suburb: highestGrowth.name, value: `${highestGrowth.market.capitalGrowth12MoPct}%` },
      most_affordable: { suburb: lowestPrice.name, value: `$${lowestPrice.market.medianHousePrice.toLocaleString()}` },
      highest_livability: { suburb: highestScore.name, score: highestScore.scores.overallScore },
    },
  });
}
