//file contains routes for actions to be performed on user models

const express = require('express');
const admin = require('../firebaseSDK');
const router = express.Router();

router.use(express.json());

module.exports = router;

router.post('/create', (req, res) => {
  admin
    .auth()
    .verifyIdToken(req.body.idToken)
    .then((decodedToken) => console.log(decodedToken.uid))
    .catch((err) => console.log(err));
});
