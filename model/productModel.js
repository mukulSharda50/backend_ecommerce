const mongoose = require('mongoose');

const specificationsSchema = new mongoose.Schema({}, { strict: false });

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'other'],
	},
	variant: {
		color: String,
		sizes: [String],
	},
	images: [String],
	inStock: {
		type: String,
		enum: ['In Stock', 'Out of Stock'],
	},
	qty_in_stock: {
		type: Number,
		required: true,
	},
	date_added: {
		type: Date,
		default: Date.now,
	},
	description: {
		type: String,
	},
	short_description: {
		type: String,
		required: true,
	},
	manufacturer: {
		type: String,
		required: true,
	},
	specifications: specificationsSchema,
	avg_ratings: {
		type: Number,
		default: 0,
	},
	ratings: [
		{
			rating: {
				type: Number,
				default: 0,
			},
			user_id: {
				type: String,
			},
		},
	],
	reviews: [String],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
