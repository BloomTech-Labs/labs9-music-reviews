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

router.get('/get/:email', (req, res) => {
  const email = req.params.email;
  dbUsers
    .getUser(email)
    .then((user) => res.status(200).json(user[0]))
    .catch((err) => res.status(404).json(err));
});

router.put('/:userID', async (req, res) => {
  const { userID } = req.params
  const body = req.body
  try {
    const updatedSubscription = await dbUsers.edit(userID, body)
    res.status(200).json(updatedSubscription)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

router.put('/:userID/change_nickname', async (req, res) => {
  const { userID } = req.params
  const body = req.body
  if (!body.nickname) {
    res.status(400).json({ message: 'Please enter new nickname' })
  } else {
    try {
      const updatedNickname = await dbUsers.edit(userID, body.nickname)
      res.status(200).json(updatedNickname)
    }
    catch (err) {
      res.status(500).json(err.message)
    }
  }
})

router.get('/:userID/nickname', async (req, res) => {
  const { userID } = req.params

  if (!userID) {
    res.status(400).json({ message: 'userID cannot be empty' })
  }
  try {
    const nickname = await dbUsers.getNickname(userID)
    res.status(200).json(nickname)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})