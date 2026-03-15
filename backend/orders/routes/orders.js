// import express from "express";
// import authMiddleware from "../../auth/middleware/authMiddleware.js";
// import { createOrder, getMyOrders } from "../controllers/ordersController.js";

// const router = express.Router();

// router.post("/create", authMiddleware, createOrder);
// router.get("/my-orders", authMiddleware, getMyOrders);

// export default router;








import express from "express";
import authMiddleware from "../../auth/middleware/authMiddleware.js";
import { createOrder, getMyOrders, createOrdersFromCart } from "../controllers/ordersController.js";

const router = express.Router();

router.post("/create", authMiddleware, createOrder);
router.post("/create-multiple", authMiddleware, createOrdersFromCart); // new endpoint
router.get("/my-orders", authMiddleware, getMyOrders);

export default router;