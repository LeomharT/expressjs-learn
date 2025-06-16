import crypto from 'crypto';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.ts';

const { JWT_SECRET } = process.env;

const router = Router({});

type BodyInput = {
	name: string;
	password: string;
};

router.post('/', async (req, res) => {
	const body: BodyInput = req.body;

	const user = await User.findOne({
		where: {
			name: body.name,
			password: crypto.createHash('md5').update(body.password).digest('hex'),
		},
	});

	if (user) {
		const token = jwt.sign(
			{
				id: user.id,
				name: user.name,
			},
			JWT_SECRET,
			{
				algorithm: 'HS256',
				expiresIn: '1Weeks',
			}
		);

		res.json({
			code: 200,
			message: 'login successfully',
			data: token,
		});
	} else {
		res.json({
			code: 200,
			msg: 'user not found',
			data: undefined,
		});
	}
});

export default router;
