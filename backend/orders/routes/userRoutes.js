const express = require('express');
const router = express.Router();
const User = require('../Models/User');   // apna User model

// GET all users (Admin ke liye)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // password mat bhejo
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;