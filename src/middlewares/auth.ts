import type { Params } from 'express-jwt';

console.log(process.env.AUTH_SECRET);

export const auth: Params = {
	secret: '123',
	algorithms: ['HS256'],
};

export default auth;
