import express, { type Express } from 'express';
import cors from 'cors';
import { authRoutes } from './features/auth/index.js';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

export default app;