const express = require('express');
const router = express.Router();

const dummyProducts = [
	{
		title: 'Product 1',
		price: 19.99,
		category: 'Electronics',
		gender: 'male',
		variant: {
			color: 'Black',
			sizes: ['S', 'M', 'L'],
		},
		images: ['image1.jpg', 'image2.jpg'],
		inStock: 'In Stock',
		qty_in_stock: 50,
		description: 'Product 1 description',
		short_description: 'Product 1 short description',
		manufacturer: 'Manufacturer A',
		specifications: {
			fabric: 'Cotton',
			length: 'Regular',
			occasion: 'Casual',
			pattern: 'Solid',
			wash: 'Machine Wash',
		},
		avg_ratings: 4.5,
		ratings: [
			{
				rating: 5,
				user_id: 'user123',
			},
			{
				rating: 4,
				user_id: 'user456',
			},
		],
		reviews: ['Great product!', 'Highly recommended.'],
	},
	{
		title: 'Product 2',
		price: 34.99,
		category: 'Fashion',
		gender: 'female',
		variant: {
			color: 'Red',
			sizes: ['S', 'M'],
		},
		images: ['image3.jpg', 'image4.jpg'],
		inStock: 'In Stock',
		qty_in_stock: 20,
		description: 'Product 2 description',
		short_description: 'Product 2 short description',
		manufacturer: 'Manufacturer B',
		specifications: {
			fabric: 'Polyester',
			length: 'Knee-Length',
			occasion: 'Party',
			pattern: 'Floral',
			wash: 'Hand Wash',
		},
		avg_ratings: 3.8,
		ratings: [
			{
				rating: 4,
				user_id: 'user789',
			},
		],
		reviews: ['Nice dress but runs small.'],
	},
	{
		title: 'Dress for Women',
		price: 39.99,
		category: 'Fashion',
		gender: 'female',
		variant: {
			color: 'Blue',
			sizes: ['S', 'M', 'L'],
		},
		images: ['image5.jpg', 'image6.jpg'],
		inStock: 'In Stock',
		qty_in_stock: 30,
		description: 'Stylish dress for women',
		short_description: 'Stylish dress in blue color',
		manufacturer: 'Manufacturer C',
		specifications: {
			fabric: 'Polyester',
			length: 'Floor-Length',
			occasion: 'Formal',
			pattern: 'Solid',
			wash: 'Dry Clean Only',
		},
		avg_ratings: 4.2,
		ratings: [
			{
				rating: 4,
				user_id: 'user789',
			},
			{
				rating: 5,
				user_id: 'user1011',
			},
		],
		reviews: ['Perfect fit!', 'Great quality material.'],
	},
	{
		title: "Women's Sneakers",
		price: 59.99,
		category: 'Footwear',
		gender: 'female',
		variant: {
			color: 'White',
			sizes: ['US 6', 'US 7', 'US 8'],
		},
		images: ['image7.jpg', 'image8.jpg'],
		inStock: 'In Stock',
		qty_in_stock: 15,
		description: 'Comfortable sneakers for women',
		short_description: 'White sneakers for women',
		manufacturer: 'Manufacturer D',
		specifications: {
			fabric: 'Canvas',
			occasion: 'Casual',
			pattern: 'Plain',
			wash: 'Hand Wash',
		},
		avg_ratings: 4.8,
		ratings: [
			{
				rating: 5,
				user_id: 'user1213',
			},
		],
		reviews: ['Love these sneakers!', 'Best shoes ever!'],
	},
];

const Product = require('../model/productModel');

router.post('/', async (req, res) => {
	try {
		Product.insertMany(dummyProducts)
			.then(() => console.log('success'))
			.catch((err) => console.log(err));
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
