import { Router } from 'express';
import { User } from '../models/user.ts';

const router = Router({});

router.get('/', async (req, res) => {
	const users = await User.findAll();

	console.log(users.every((user) => user instanceof User));

	res.json(users);
});

router.get('/hello', (req, res) => {
	res.json({
		Hello: 'User Router',
	});
});

export default router;
