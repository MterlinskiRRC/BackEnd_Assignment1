/**
 * @interface PortfolioPerformance
 * This interface defines the key metrics
 * about a portfolio's performance, including the initial investment,
 * its current value, profit or loss, and the percentage change.
 */
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

/**
 * @function calculatePortfolioPerformance
 * This function takes the initial investment and the current value of a portfolio
 * and computes the profit or loss, the percentage change, and generates a message as defined
 * in the example video given.
 * 
 * @param {number} initialInvestment - The initial amount invested in the portfolio. 
 * @param {number} currentValue - The current value of the portfolio.
 * @returns {PortfolioPerformance} An object containing the calculated performance metrics.
 */
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
