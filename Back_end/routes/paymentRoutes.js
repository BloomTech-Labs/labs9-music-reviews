const stripe = require('../constants/stripe');
const express = require('express');
const router = express.Router();

router.use(express.json());

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

router.get('/',(req, res) => {
    res.send({
        message: "Hello Stripe checkout server",
        timestamp: new Date().toISOString()
    });
});

router.post('/', (req, res) => {
    stripe.charges.create(req.body, postCharge(res));
});

// // routes
// const paymentApi = app => {
//     app.get('/', (req, res) => {
//         res.send({
//             message: "Hello Stripe checkout server",
//             timestamp: new Date().toISOString()
//         });
//     })

//     app.post('/', (req, res) => {
//         stripe.charges.create(req.body, postCharge(res));
//     });

//     return app;
// }

// module.exports = paymentApi;

module.exports = router;