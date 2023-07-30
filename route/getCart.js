const express = require('express');
const router = express.Router();

const Cart = require('../model/cartModel');

router.get('/', async (req, res) => {
	try {
		const { cartId } = req.body;
		if (!cartId) throw new Error('User id is required.');
		const cart = await Cart.findOne({ cartId });
		if (!cart) return res.status(200).json({ data: 'Empty Cart' });
		return res.status(200).json({ cart });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
