export function calculatePortfolioPerformance(): any {
    
interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  netGain: number;
  percentageChange: string; // Formatted as a string to match common API outputs
  isPositive: boolean;
}

    const profitOrLoss = initialInvestment / currentValue;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    if (percentageChange > 20) {
        performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
    } else {
        performanceSummary = `The portfolio has performed poorly.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
