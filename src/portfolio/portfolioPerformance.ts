export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange =
    initialInvestment !== 0
      ? (profitOrLoss / initialInvestment) * 100
      : 0;

  const summaries = [
    { test: (pc: number) => pc > 30, message: "Excellent performance! Your investments are doing great." },
    { test: (pc: number) => pc >= 10, message: "Solid gain. Keep monitoring your investments." },
    { test: (pc: number) => pc > 0, message: "Modest gain. Your portfolio is growing slowly." },
    { test: (pc: number) => pc === 0, message: "No change. Your portfolio is holding steady at 0%." },
    { test: (pc: number) => pc >= -10, message: "Minor loss. Stay calm and review your options." },
    { test: (pc: number) => true, message: "Significant loss. Review your portfolio strategy." },
  ];

  const performanceSummary =
    summaries.find(s => s.test(percentageChange))?.message ?? "Error calculating performance summary.";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary
  };
}
