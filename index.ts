import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { expressjwt } from 'express-jwt';
import path from 'path';
import { sequelize } from './src/config/db.ts';
import auth from './src/middlewares/auth.ts';
import errorHandler from './src/middlewares/error.ts';
import { initModels } from './src/models/init-models.ts';
import user from './src/routes/user.ts';

const port = process.env.PORT;

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
app.use(
	expressjwt(auth).unless({
		path: [
			// Static Assets
			/^\/assets\/.*\.(png|jpg|jpeg|gif|svg)$/,
			// Open Api
			'/login',
		],
	})
);

/**
 * Initial Database
 */

initModels(sequelize);

/**
 * Register Sub Router
 */
app.use('/user', user);
app.use('/assets', express.static(path.join(path.resolve(), 'assets')));

// Error Handleer
app.use(errorHandler);

/**
 * Start Project
 */
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
