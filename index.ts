import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { expressjwt } from 'express-jwt';
import auth from './src/middlewares/auth.ts';
import errorHandler from './src/middlewares/error.ts';
import user from './src/routes/user.ts';

/**
 * Environment Variable
 */
dotenv.config({});
const port = process.env.PORT || 3001;

/**
 * Express App
 */
const app = express();

/**
 * Register Middleware
 */
// Parse JSON data
app.use(express.json());
// Parse post body
app.use(express.urlencoded({ extended: false }));
// CORS
app.use(cors());
// JWT auth
app.use(expressjwt(auth).unless({ path: ['/ahhaha'] }));
// Error Handleer
app.use(errorHandler);
// Response Handleer

/**
 * Register Sub Router
 */
app.use('/user', user);

/**
 * Start Project
 */
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
