import type { Params } from 'express-jwt';

export const auth: Params = {
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256'],
};

export default auth;
