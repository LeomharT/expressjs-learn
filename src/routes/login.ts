import { Router } from 'express';

const router = Router({});

router.get('/', (req, res) => {
	const body = req.body;

	console.log(body);

	res.json({
		code: 200,
		data: body,
	});
});

export default router;
