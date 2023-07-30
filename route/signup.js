const express = require('express');
const router = express.Router();

const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const { setUserToken, verifyUserToken } = require('../service/auth');
router.post('/', async (req, res) => {
	try {
		const { username, firstName, lastName, email, password, phone } = req.body;
		console.log(username, firstName, lastName, email, password, phone);
		if (!(firstName && lastName && username && email && password && phone))
			res.status(400).json({ error: 'All input fields are required.' });
		if (
			firstName.length < 3 ||
			firstName.length > 255 ||
			lastName.length < 3 ||
			lastName.length > 255 ||
			username.length < 3 ||
			username.length > 255
		)
			return res
				.status(400)
				.json({ error: 'Name should be between 3 and 255 characters.' });

		const userNameExists = await User.findOne({ username });
		if (userNameExists)
			res.status(400).json({ error: 'username is already taken.' });

		const encryptedPassword = await bcrypt.hash(password, 10);
		console.log('encrypted:', encryptedPassword);
		const user = await User.create({
			username,
			firstName,
			lastName,
			email: email.toLowerCase(),
			password: encryptedPassword,
			phone,
		})
			.then((createdUser) => {
				console.log('User created successfully');
				console.log(createdUser);
				const token = setUserToken(createdUser);
				const newUser = {
					user: createdUser._doc,
					token: token,
				};
				res.status(201).json(newUser);
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
