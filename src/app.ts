import express from 'express';
import { calculatePortfolioPerformance } from './portfolio/portfolioPerformance';


const app = express();

app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Portfolio Performance API!',
        endpoints: {
            performance: '/performance?initialinvestment=10000&currentvalue=12000'
        }
    });
});

app.get('/performance', (req, res) => {
    const { initialinvestment, currentvalue } = req.query;

    if (!initialinvestment || !currentvalue) {
        return res.status(400).json({ error: 'Both initialinvestment and currentvalue query parameters are required.' });
    }

    const initialInvestment = parseFloat(initialinvestment as string);
    const currentValue = parseFloat(currentvalue as string);

    if (isNaN(initialInvestment) || isNaN(currentValue)) {
        return res.status(400).json({ error: 'initialinvestment and currentvalue must be numbers.' });
    }

    const performance = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(performance);
});

export default app;
