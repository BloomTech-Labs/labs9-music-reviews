const stripe = require('../constants/stripe');

const postCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({
            error: stripeErr
        });
    } else {
        res.status(200).send({
            success: stripeRes
        });
    }
}

const paymentApi = app => {
    app.get('/payment', (req, res) => {
        res.send({
            message: "Hello Stripe checkout server",
            timestamp: new Date().toISOString()
        });
    })
    
    app.post('/payment', (req, res) => {
        stripe.charges.create(req.body, postCharge(res));
    });
    
    return app;
}

module.exports = paymentApi;