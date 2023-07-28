const express = require('express');
require('dotenv').config();

const app = express();
const db = require('./config/database');
const login = require('./route/login');
const signupRoute = require('./route/signup');

app.get('/', (req, res) => {
	res.send('hello');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/signup', signupRoute);
app.use('/login', login);

const PORT = process.env.APP_PORT || 8000;

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
