export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  const performanceSummary = profitOrLoss >= 0
    ? `Solid gain of $${profitOrLoss.toFixed(2)}. Keep monitoring your investments`
    : `Loss of $${Math.abs(profitOrLoss).toFixed(2)} detected. Review your portfolio strategy`;

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary
  };
}