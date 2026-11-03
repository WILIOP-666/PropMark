import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    const formatted = (amount / 1000000).toFixed(2);
    return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}M`;
  }
  if (amount >= 1000) {
    return `$${Math.round(amount).toLocaleString("en-AU")}`;
  }
  return `$${amount}`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString("en-AU");
}

export function formatPercent(pct: number, includeSign: boolean = false): string {
  const sign = includeSign && pct > 0 ? "+" : "";
  return `${sign}${pct.toFixed(1)}%`;
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-accent-emerald bg-emerald-50 border-emerald-200";
  if (score >= 65) return "text-accent-blue bg-blue-50 border-blue-200";
  if (score >= 50) return "text-accent-gold bg-yellow-50 border-yellow-200";
  return "text-accent-red bg-red-50 border-red-200";
}

export function getRiskBadgeClass(risk: string): string {
  switch (risk.toLowerCase()) {
    case "none":
    case "low":
      return "text-accent-emerald bg-emerald-50 border border-emerald-200";
    case "moderate":
      return "text-accent-orange bg-orange-50 border border-orange-200";
    case "high":
      return "text-accent-red bg-red-50 border border-red-200";
    default:
      return "text-ink-60 bg-surface-tint border border-ink-10";
  }
}
