//file contains routes for actions to be performed on user models

const express = require('express');
const dbUsers = require('../data/usersDb.js');
const admin = require('../firebaseSDK');
const router = express.Router();

router.use(express.json());

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const users = await dbUsers.getAllUsers();
    res.status(200).json(users);
  } catch ( err ){
    res.status(500).json({
      message: 'failed to retrieve users data.'
    })
  }
})

router.post('/create', (req, res) => {
  admin
    .auth()
    .verifyIdToken(req.body.token)
    .then((decodedToken) => {
      dbUsers
        .createNewUser(decodedToken)
        .then((newUser) => {
          console.log(newUser);
          if (newUser !== null) {
            res.status(201).json(newUser[0]);
          }
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/', async (req, res) => {
  try {
    const users = await dbUsers.retrieve()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

router.get('/get/:email', (req, res) => {
  const email = req.params.email;
  dbUsers
    .getUser(email)
    .then((user) => res.status(200).json(user[0]))
    .catch((err) => res.status(404).json(err));
});

router.put('/:userID', async (req, res) => {
  const { userID } = req.params
  const date = req.body
  if (date.subscriptionExpiraton) {
    res.status(400).json({ message: 'date cannot be blank' })
  } else {
    try {
      const updatedSubscription = await dbUsers.edit(userID, date)
      res.status(200).json(updatedSubscription)
    }
    catch (err) {
      res.status(500).json(err.message)
    }
  }
})