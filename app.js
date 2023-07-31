const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./config/database');

const login = require('./route/login');
const signupRoute = require('./route/signup');
const cart = require('./route/getCart');
const addToCart = require('./route/addTocart');
const addProduct = require('./route/addProduct');
const product = require('./route/product');

app.get('/', (req, res) => {
	res.send('hello');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/signup', signupRoute);
app.use('/login', login);
app.use('/cart', cart);
app.use('/cart/addToCart', addToCart);
app.use('/product/create', addProduct);
app.use('/product/', product);

const PORT = process.env.APP_PORT || 8000;

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
