import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"
import {createOrder, getMyOrders, createOrdersFromCart, getAllOrders, updateOrderStatus, deleteOrder, checkStock} from "../controllers/ordersController.js";

const router = express.Router();

// User Routes
router.post("/create", authMiddleware, createOrder);
router.post("/create-from-cart", authMiddleware, createOrdersFromCart);
router.get("/my-orders", authMiddleware, getMyOrders);

// Admin Routes
router.get("/all", getAllOrders);

// Status Update Route
router.patch("/:id/status", authMiddleware, updateOrderStatus);

// Delete Order Route
router.delete("/:id", authMiddleware, deleteOrder);

// Check Stock Route
router.post("/check-stock", authMiddleware, checkStock);

export default router;