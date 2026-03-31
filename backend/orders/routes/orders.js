import express from "express";
import authMiddleware from "../../auth/middleware/authMiddleware.js";
import {createOrder,getMyOrders,createOrdersFromCart,getAllOrders} from "../controllers/ordersController.js";

const router = express.Router();

// User Routes 
router.post("/create", authMiddleware, createOrder);
router.post("/create-multiple", authMiddleware, createOrdersFromCart);
router.get("/my-orders", authMiddleware, getMyOrders);

//  Admin Routes
router.get("/all", getAllOrders);    

// Temporary: ye login system lagane ke bad uncomment krdena
// router.get("/all", authMiddleware, getAllOrders);

export default router;