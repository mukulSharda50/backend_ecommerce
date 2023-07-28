const express = require('express');
const router = express.Router();

const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const { setUserToken } = require('../service/auth');
router.post('/', async (req, res) => {
	try {
		const { username, password } = req.body;
		console.log(username, password);
		if (!(username && password))
			return res.status(400).json({ error: 'All input fields are required.' });
		if (username.length < 3 || username.length > 255)
			return res
				.status(400)
				.json({ error: 'Name should be between 3 and 255 characters.' });

		let user = await User.findOne({ username });
		if (!user) return res.status(400).json({ error: 'username not found.' });

		const match = await bcrypt.compare(password, user.password);
		if (!match)
			return res.status(400).json({ error: 'password is incorrect.' });
		const token = setUserToken(user);
		const newUser = {
			user: user._doc,
			token: token,
		};
		console.log(token);
		return res.status(200).json(newUser);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
