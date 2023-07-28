const jwt = require('jsonwebtoken');

function setUserToken(user) {
	const payload = {
		id: user._id,
		email: user.email,
	};
	const token = jwt.sign(payload, process.env.SECRET);
	return token;
}

function verifyUserToken(req, res, next) {
	const token =
		req.body.token || req.query.token || req.headers['x-access-token'];
	if (!token)
		return res.status(403).json({ error: 'Missing token for authorization.' });
	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).json({ error: 'Invalid token for authorization.' });
	}
	return next();
}

module.exports = {
	setUserToken,
	verifyUserToken,
};
