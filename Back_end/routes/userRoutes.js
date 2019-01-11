//file contains routes for actions to be performed on user models

const express = require('express');
const dbUsers = require('../data/usersDb.js');
const router = express.Router();

router.use(express.json());

router.get('/view/all', async (req, res) => {
  try {
    const users = await dbUsers.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'failed to retrieve users data.',
    });
  }
});
router.post('/signup', async (req, res) => {
  const newUser = req.body;
  if (!newUser.username || !newUser.password) {
    res.status(400).json({
      message: 'All accounts must have both a username and password.',
    });
  } else {
    try {
      const createdUser = await dbUsers.signUp(newUser);
      res.status(201).json(createdUser);
    } catch (err) {
      res.status(500).json({
        message: 'Something went wrong.',
      });
    }
  }
});
router.post('/login', async (req, res) => {
  const user = req.body;
  if (!user.username || !user.password) {
    res.status(400).json({
      message: 'Invalid credentials.',
    });
  } else {
    try {
      const loggedInUser = await dbUsers.signIn(user);
      res.status(200).json(loggedInUser);
    } catch (err) {
      res.status(500).json({
        message: 'Something went wrong.',
      });
    }
  }
});
router.post('/change_password', async (req, res) => {
  const user = req.body;
  if (user.username && user.oldPassword && user.newPassword) {
    try {
      const newSettings = {
        username: user.username,
        password: user.newPassword,
      };
      const changedUser = await dbUsers.changePassword({
        newSettings,
      });
      res.status(200).json(changedUser);
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } else {
    res.status(400).json({
      message: 'Invalid credentials.',
    });
  }
});

module.exports = router;
