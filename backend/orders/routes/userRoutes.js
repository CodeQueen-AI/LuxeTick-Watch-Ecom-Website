const express = require('express');
const router = express.Router();
const User = require('../Models/User');

// GET all users (Admin ke liye)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// sirf admin hi sare users dekh skhta hai 
// router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
module.exports = router;