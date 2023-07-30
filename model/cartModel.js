const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	cartId: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	prodDetails: [
		{
			prodId: {
				type: String,
				required: true,
			},
			prodTitle: {
				type: String,
				required: true,
			},
			prodImg: {
				type: String,
			},
			prodPrice: {
				type: Number,
				required: true,
			},
			prodQty: {
				type: Number,
				required: true,
			},
			prodCategory: {
				type: String,
			},
			prodVariant: {
				type: String,
			},
			prodSize: {
				type: String,
			},
		},
	],
	totalPrice: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	modifiedAt: {
		type: Date,
	},
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
