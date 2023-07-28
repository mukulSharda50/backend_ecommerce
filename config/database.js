const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_URI } = process.env;
// Connect to MongoDB
mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection events
db.on('error', (err) => {
	console.error('MongoDB connection error:', err);
});

db.once('open', () => {
	console.log('Connected to MongoDB!');
});

module.exports = db;
