import express from 'express';
const router = express.Router();

// Import User Model (agar tumhara model yahan hai)
import User from "../Models/user.js"     // apna correct path daal do

// GET /api/users  →  Admin ke liye saare users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')           // password security ke liye mat bhejo
      .sort({ createdAt: -1 });      // sabse naye pehle

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: "Server Error while fetching users" 
    });
  }
});

export default router;