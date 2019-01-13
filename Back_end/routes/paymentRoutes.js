const stripe = require('../constants/stripe');
// const express = require('express');
// const router = express.Router();

// router.use(express.json());

const postCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).json({
            error: stripeErr
        });
    } else {
        res.status(200).json({
            success: stripeRes
        });
    }
}

// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: "Hello Stripe checkout server",
//         timestamp: new Date().toISOString()
//     });
// });

// router.post('/charge', async (req, res) => {
//     try {
//         let { status } = await stripe.charges.create(req.body, postCharge(res));
//         res.status(200).json({
//             status: status,
//             message: "Payment charged.",
//         })
//     } catch (err) {
//         res.status(500).json({
//             message: "Failed to charge credit card.",
//             error: err,
//         })
//     };
// });

// module.exports = router;

const paymentApi = app => {
    app.get('/', (req, res) => {
        res.send({
            message: "Hello Stripe checkout server",
            timestamp: new Date().toISOString()
        });
    })

    app.post('/charge', (req, res) => {
        stripe.charges.create(req.body, postCharge(res));
    });

    return app;
}

module.exports = paymentApi;