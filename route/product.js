const express = require('express');
const router = express.Router();

const Product = require('../model/productModel');

router.get('/:gender', async (req, res) => {
	try {
		const gender = req.params.gender;
		const products = await Product.find({ gender });
		console.log(products);
		return res.status(200).json(products);
	} catch (error) {
		console.log(error);
	}
});
router.get('/details/:id', async(req, res) => {
	try{
		const id = req.params.id;
		const products = await Product.findOne({_id: id});
		if (!products) return res.status(404).json('Not found');
		return res.status(200).json(products);
	}catch(err){
		console.log(err);
	}
});
module.exports = router;
