import express, { Application } from 'express';
//import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import paymentRoutes from './routes/payments';

// Initialize environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI || '')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
