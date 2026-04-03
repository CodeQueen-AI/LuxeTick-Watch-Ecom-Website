import express from "express";
import Contact from "../models/Contact.js";
import { sendContact } from "../controllers/contactController.js"

const router = express.Router();

router.post("/contact", sendContact);

// Get all contact messages
router.get("/contact", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export default router;