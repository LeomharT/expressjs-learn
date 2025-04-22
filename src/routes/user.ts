import { Router } from 'express';

const router = Router({});

router.get('/', (req, res) => {
	res.json({
		Hello: 'User Root',
	});
});

router.get('/hello', (req, res) => {
	res.json({
		Hello: 'User Router',
	});
});

export default router;
