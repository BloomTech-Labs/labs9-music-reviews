require('dotenv').load();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require('stripe')(STRIPE_SECRET_KEY);
console.log(stripe);
module.exports = stripe;

