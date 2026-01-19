import express from 'express';
import { calculatePortfolioPerformance } from './portfolio/portfolioPerformance';

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Portfolio Performance API!',
        endpoints: {
            performance: '/performance?initial=10000&current=12000'
        }
    });
});

app.get('/performance', (req, res) => {
    // Use default values if query parameters are not provided
    const initialStr = req.query.initial as string | undefined;
    const currentStr = req.query.current as string | undefined;

    const initialInvestment = initialStr ? parseFloat(initialStr) : 10000;
    const currentValue = currentStr ? parseFloat(currentStr) : 12000;

    const performance = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(performance);
});

export default app;
