"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, TrendingUp } from "lucide-react";
import { formatCurrency, formatPercent } from "../lib/utils";

interface InvestmentCalculatorProps {
  defaultPrice: number;
  defaultWeeklyRent: number;
}

export default function InvestmentCalculator({ defaultPrice, defaultWeeklyRent }: InvestmentCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState(defaultPrice || 1500000);
  const [depositPct, setDepositPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.25);
  const [weeklyRent, setWeeklyRent] = useState(defaultWeeklyRent || 950);
  const [mgmtFeePct, setMgmtFeePct] = useState(6.6); // standard AU management fee + GST
  const [annualHoldingCosts, setAnnualHoldingCosts] = useState(4800); // Council, strata, water, insurance

  const loanAmount = purchasePrice * (1 - depositPct / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = 30 * 12; // 30 year mortgage

  // Monthly Principal + Interest payment
  const monthlyMortgage =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
      : loanAmount / numPayments;

  const annualMortgage = monthlyMortgage * 12;
  const annualGrossRent = weeklyRent * 52;
  const annualManagementFee = (annualGrossRent * mgmtFeePct) / 100;
  const totalAnnualExpenses = annualMortgage + annualHoldingCosts + annualManagementFee;
  const annualCashFlow = annualGrossRent - totalAnnualExpenses;

  const grossYield = (annualGrossRent / purchasePrice) * 100;
  const netYield = ((annualGrossRent - (annualHoldingCosts + annualManagementFee)) / purchasePrice) * 100;

  return (
    <div className="card-editorial p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="eyebrow-mono text-xs">/financial modeling</span>
          <h4 className="text-lg font-bold text-[#3c3a39]">
            Investor Cash Flow & Yield Calculator
          </h4>
        </div>
        <div className="w-8 h-8 rounded-full bg-ink-5 flex items-center justify-center text-[#3c3a39]">
          <Calculator className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-mono text-ink-60 block mb-1">
              Purchase Price: {formatCurrency(purchasePrice)}
            </label>
            <input
              type="range"
              min="400000"
              max="5000000"
              step="25000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-[#3c3a39] h-2 bg-ink-10 rounded-lg cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1">
                Deposit (%): {depositPct}%
              </label>
              <input
                type="number"
                value={depositPct}
                onChange={(e) => setDepositPct(Number(e.target.value))}
                className="w-full p-2 bg-surface-light border border-ink-10 rounded-lg text-sm font-mono text-[#3c3a39]"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1">
                Interest Rate (%): {interestRate}%
              </label>
              <input
                type="number"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-2 bg-surface-light border border-ink-10 rounded-lg text-sm font-mono text-[#3c3a39]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1">
                Weekly Rent: ${weeklyRent}/wk
              </label>
              <input
                type="number"
                step="25"
                value={weeklyRent}
                onChange={(e) => setWeeklyRent(Number(e.target.value))}
                className="w-full p-2 bg-surface-light border border-ink-10 rounded-lg text-sm font-mono text-[#3c3a39]"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-ink-60 block mb-1">
                Council / Strata / Ins.: ${annualHoldingCosts}/yr
              </label>
              <input
                type="number"
                step="200"
                value={annualHoldingCosts}
                onChange={(e) => setAnnualHoldingCosts(Number(e.target.value))}
                className="w-full p-2 bg-surface-light border border-ink-10 rounded-lg text-sm font-mono text-[#3c3a39]"
              />
            </div>
          </div>
        </div>

        {/* Output Metrics Card */}
        <div className="bg-surface-light p-5 rounded-xl border border-ink-10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-ink-60 uppercase tracking-wider block mb-4">
              Projected Annual Summary
            </span>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-surface rounded-lg border border-ink-5">
                <span className="text-[11px] font-mono text-ink-60 block">Gross Rental Yield</span>
                <span className="text-lg font-bold font-mono text-[#3c3a39]">
                  {formatPercent(grossYield)}
                </span>
              </div>
              <div className="p-3 bg-surface rounded-lg border border-ink-5">
                <span className="text-[11px] font-mono text-ink-60 block">Net Rental Yield</span>
                <span className="text-lg font-bold font-mono text-accent-blue">
                  {formatPercent(netYield)}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs divide-y divide-ink-5">
              <div className="flex justify-between pt-1">
                <span className="text-ink-60">Estimated Loan Balance (LVR {100 - depositPct}%)</span>
                <span className="font-mono font-medium">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-ink-60">Monthly P&amp;I Repayment</span>
                <span className="font-mono font-medium">${Math.round(monthlyMortgage).toLocaleString()}/mo</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-ink-60">Annual Gross Rental Income</span>
                <span className="font-mono font-medium text-accent-emerald">
                  +${Math.round(annualGrossRent).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-1.5 font-bold text-sm">
                <span className="text-[#3c3a39]">Pre-Tax Annual Cash Flow</span>
                <span className={`font-mono ${annualCashFlow >= 0 ? "text-accent-emerald" : "text-accent-red"}`}>
                  {annualCashFlow >= 0 ? "+" : ""}${Math.round(annualCashFlow).toLocaleString()}/yr
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-ink-10 text-[11px] text-ink-40">
            *Excludes negative gearing tax offsets and depreciation deductions (Division 40/43).
          </div>
        </div>
      </div>
    </div>
  );
}
