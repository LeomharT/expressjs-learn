import type { NextFunction, Request, Response } from 'express';

function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err) {
		if (err.name === 'UnauthorizedError') {
			res.status(401).send({
				code: 401,
				message: err.message,
			});
			return;
		}

		res.status(500).send({
			code: 500,
			message: 'Unknow Service Error',
		});
		return;
	}
	next(err);
}

export default errorHandler;
