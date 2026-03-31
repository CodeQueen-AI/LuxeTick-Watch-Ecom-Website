// import express from 'express';
// const router = express.Router();

// // Import User Model (agar tumhara model yahan hai)
// import User from "../Models/user.js"     // apna correct path daal do

// // GET /api/users  →  Admin ke liye saare users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find()
//       .select('-password')           // password security ke liye mat bhejo
//       .sort({ createdAt: -1 });      // sabse naye pehle

//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Server Error while fetching users" 
//     });
//   }
// });

// export default router;


import express from "express";
const router = express.Router();

import User from "../Models/user.js";


// 🔹 GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});


// 🔹 CREATE user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});


// 🔹 UPDATE user
router.put("/:id", async (req, res) => {
  try {
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
});


// 🔹 DELETE user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});


export default router;