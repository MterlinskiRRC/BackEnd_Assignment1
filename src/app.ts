import express from 'express';
import { calculatePortfolioPerformance } from './portfolio/portfolioPerformance';

const app = express();

app.get('/performance', (req, res) => {
    const performance = calculatePortfolioPerformance();
    res.json(performance);
});

export default app;
