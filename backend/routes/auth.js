import express from 'express';
import { signup, login } from "../controllers/authController.js"
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Get current logged-in user (fresh from DB)
router.get('/me', authMiddleware, async (req, res) => {
  res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
});

export default router;