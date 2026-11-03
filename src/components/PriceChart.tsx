"use client";

import { useState } from "react";
import { formatCurrency } from "../lib/utils";

interface PriceChartProps {
  series: { year: number; housePrice: number; unitPrice: number }[];
  suburbName: string;
}

export default function PriceChart({ series, suburbName }: PriceChartProps) {
  const [activeType, setActiveType] = useState<"house" | "unit">("house");

  if (!series || series.length === 0) return null;

  const minVal = Math.min(...series.map((s) => (activeType === "house" ? s.housePrice : s.unitPrice))) * 0.9;
  const maxVal = Math.max(...series.map((s) => (activeType === "house" ? s.housePrice : s.unitPrice))) * 1.05;

  const width = 600;
  const height = 240;
  const paddingX = 40;
  const paddingY = 30;

  const points = series.map((s, idx) => {
    const val = activeType === "house" ? s.housePrice : s.unitPrice;
    const x = paddingX + (idx / (series.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((val - minVal) / (maxVal - minVal)) * (height - paddingY * 2);
    return { x, y, year: s.year, val };
  });

  const pathD = points.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <div className="card-editorial p-6">
      {/* Title & Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="eyebrow-mono text-xs">/historical trajectory</span>
          <h4 className="text-lg font-bold text-ink">
            Median Price Trend (2020 - 2026)
          </h4>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-surface-tint rounded-full text-xs font-mono">
          <button
            onClick={() => setActiveType("house")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeType === "house" ? "bg-[#3c3a39] text-[#fefefe] shadow-sm" : "text-ink-60 hover:text-ink-80"
            }`}
          >
            Houses
          </button>
          <button
            onClick={() => setActiveType("unit")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeType === "unit" ? "bg-[#3c3a39] text-[#fefefe] shadow-sm" : "text-ink-60 hover:text-ink-80"
            }`}
          >
            Units / Lofts
          </button>
        </div>
      </div>

      {/* SVG Responsive Chart */}
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {/* Subtle horizontal grid lines */}
          {[0, 0.33, 0.66, 1].map((pct, i) => {
            const y = height - paddingY - pct * (height - paddingY * 2);
            const val = minVal + pct * (maxVal - minVal);
            return (
              <g key={i}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="rgba(11, 9, 7, 0.08)"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="text-[9px] font-mono fill-[#0b090766]"
                >
                  {formatCurrency(val)}
                </text>
              </g>
            );
          })}

          {/* Shaded Area Under Curve */}
          <path
            d={areaD}
            fill={activeType === "house" ? "rgba(38, 119, 255, 0.08)" : "rgba(244, 158, 255, 0.08)"}
          />

          {/* Main Line */}
          <path
            d={pathD}
            fill="none"
            stroke={activeType === "house" ? "#2677ff" : "#817fff"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {points.map((pt, i) => (
            <g key={i} className="group">
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#fffcf6"
                stroke={activeType === "house" ? "#2677ff" : "#817fff"}
                strokeWidth="2"
                className="hover:r-6 transition-all cursor-pointer"
              />
              <text
                x={pt.x}
                y={height - 10}
                textAnchor="middle"
                className="text-[10px] font-mono fill-[#0b090799]"
              >
                {pt.year}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-4 pt-3 border-t border-ink-10 flex items-center justify-between text-xs text-ink-60">
        <span>Verified REA Settlement Records</span>
        <span className="font-mono text-accent-emerald">
          Current: {formatCurrency(points[points.length - 1].val)}
        </span>
      </div>
    </div>
  );
}
