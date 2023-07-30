const express = require('express');
const router = express.Router();

const Cart = require('../model/cartModel');
const date = new Date();

router.post('/', async (req, res) => {
	try {
		const { userId, prodDetails } = req.body;
		const cart = await Cart.findOne({ userId });
		if (!cart) {
			const date = new Date();
			await Cart.create({
				cartId: uuid.v4(),
				userId: userId,
				prodDetails: prodDetails,
				totalPrice: prodDetails.prodPrice * prodDetails.prodQty,
				createdAt: date.getDate(),
				modifiedAt: date.getDate(),
			})
				.then((newCart) => {
					console.log('cart created successfully');
					res.status(200).json({ data: newCart });
				})
				.catch((error) => {
					console.log(`error in creating cart: ${error}`);
				});
		} else {
			cart.prodDetails.push(prodDetails);
			cart.totalPrice += prodDetails.price * prodDetails.Qty;
			cart.modifiedAt = date.getDate();
			await cart.save();
			res.status(200).json({ cart });
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
