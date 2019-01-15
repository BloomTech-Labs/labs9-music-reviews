//file contains routes for actions to be performed on user models

const express = require('express');
const dbUsers = require('../data/usersDb.js');
const router = express.Router();

router.use(express.json());

module.exports = router;
