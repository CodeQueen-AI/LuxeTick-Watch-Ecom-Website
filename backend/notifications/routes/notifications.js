import express from "express";
import { createNotification, getNotifications, markAsRead } from "../controllers/notificationController";

const router = express.Router();

// Admin creates notification
router.post("/", createNotification);

// User fetches notifications
router.get("/", getNotifications);

// User marks notification as read
router.put("/:id/read", markAsRead);

export default router;