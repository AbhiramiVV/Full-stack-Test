import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS middleware
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api', userRoutes);

export default app;
