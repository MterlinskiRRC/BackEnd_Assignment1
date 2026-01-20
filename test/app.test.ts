import request from "supertest";
import app from "../src/app";

describe("API Endpoints", () => {
  describe("GET /performance", () => {
    it("should return portfolio performance for valid inputs", async () => {
      const response = await request(app)
        .get("/performance?initialinvestment=1000&currentvalue=1500")
        .expect(200);

      expect(response.body).toEqual({
        initialInvestment: 1000,
        currentValue: 1500,
        profitOrLoss: 500,
        percentageChange: 50,
        performanceSummary:
          "Excellent performance! Your investments are doing great.",
      });
    });

    it("should return a 400 error if a query parameter is missing", async () => {
      const response = await request(app)
        .get("/performance?initialinvestment=1000")
        .expect(400);

      expect(response.body).toEqual({
        error: "Both initialinvestment and currentvalue query parameters are required.",
      });
    });

    it("should return a 400 error for invalid query parameters", async () => {
      const response = await request(app)
        .get("/performance?initialinvestment=abc&currentvalue=1500")
        .expect(400);

      expect(response.body).toEqual({
        error: "initialinvestment and currentvalue must be numbers.",
      });
    });
  });


  describe("GET /health", () => {
    it("should return a health check status", async () => {
      const response = await request(app).get("/health").expect(200);

      expect(response.body.status).toBe("ok");
      expect(response.body).toHaveProperty("uptime");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body).toHaveProperty("version");
    });
  });



});
