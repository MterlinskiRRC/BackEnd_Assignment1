import {
  calculatePortfolioPerformance,
  PortfolioPerformance,
} from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {



  it("should calculate excellent performance for a significant gain", () => {
    
    const initialInvestment = 1000;
    const currentValue = 1500;
    const expectedPerformance: PortfolioPerformance = {
      initialInvestment: 1000,
      currentValue: 1500,
      profitOrLoss: 500,
      percentageChange: 50,
      performanceSummary:
        "Excellent performance! Your investments are doing great.",
    };

    
    const actualPerformance = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    
    expect(actualPerformance).toEqual(expectedPerformance);
  });




  it("should show no change when the investment is stable", () => {
    
    const initialInvestment = 1000;
    const currentValue = 1000;
    const expectedPerformance: PortfolioPerformance = {
      initialInvestment: 1000,
      currentValue: 1000,
      profitOrLoss: 0,
      percentageChange: 0,
      performanceSummary: "No change. Your portfolio is holding steady at 0%.",
    };

    
    const actualPerformance = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    
    expect(actualPerformance).toEqual(expectedPerformance);
  });



  it("should calculate a significant loss", () => {
    
    const initialInvestment = 1000;
    const currentValue = 700;
    const expectedPerformance: PortfolioPerformance = {
      initialInvestment: 1000,
      currentValue: 700,
      profitOrLoss: -300,
      percentageChange: -30,
      performanceSummary: "Significant loss. Review your portfolio strategy.",
    };

    
    const actualPerformance = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    
    expect(actualPerformance).toEqual(expectedPerformance);
  });


  
  
  it("should handle zero initial investment", () => {
    
    const initialInvestment = 0;
    const currentValue = 100;
    const expectedPerformance: PortfolioPerformance = {
      initialInvestment: 0,
      currentValue: 100,
      profitOrLoss: 100,
      percentageChange: 0,
      performanceSummary: "No change. Your portfolio is holding steady at 0%.",
    };

    
    const actualPerformance = calculatePortfolioPerformance(
      initialInvestment,
      currentValue
    );

    
    expect(actualPerformance).toEqual(expectedPerformance);
  });
});
