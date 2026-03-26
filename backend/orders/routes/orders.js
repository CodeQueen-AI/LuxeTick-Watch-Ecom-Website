// import express from "express";
// import authMiddleware from "../../auth/middleware/authMiddleware.js";
// import { createOrder, getMyOrders } from "../controllers/ordersController.js";

// const router = express.Router();

// router.post("/create", authMiddleware, createOrder);
// router.get("/my-orders", authMiddleware, getMyOrders);

// export default router;








// import express from "express";
// import authMiddleware from "../../auth/middleware/authMiddleware.js";
// import { createOrder, getMyOrders, createOrdersFromCart } from "../controllers/ordersController.js";

// const router = express.Router();

// router.post("/create", authMiddleware, createOrder);
// router.post("/create-multiple", authMiddleware, createOrdersFromCart); // new endpoint
// router.get("/my-orders", authMiddleware, getMyOrders);

// export default router;




















// import express from "express";
// import authMiddleware from "../../auth/middleware/authMiddleware.js";

// import {
//   createOrder,
//   getMyOrders,
//   createOrdersFromCart,
// } from "../controllers/ordersController.js";

// const router = express.Router();

// router.post("/create", authMiddleware, createOrder);

// router.post("/create-multiple", authMiddleware, createOrdersFromCart);

// router.get("/my-orders", authMiddleware, getMyOrders);

// export default router;











import express from "express";
import authMiddleware from "../../auth/middleware/authMiddleware.js";

import {
  createOrder,
  getMyOrders,
  createOrdersFromCart,
  getAllOrders,          // ← Yeh import karna zaroori hai
} from "../controllers/ordersController.js";

const router = express.Router();

// ==================== User Routes ====================
router.post("/create", authMiddleware, createOrder);
router.post("/create-multiple", authMiddleware, createOrdersFromCart);
router.get("/my-orders", authMiddleware, getMyOrders);

// ==================== Admin Routes ====================
router.get("/all", getAllOrders);        // ← Yeh line important hai (authMiddleware temporarily hata diya test ke liye)

// Temporary: Agar auth chahiye to baad mein add kar dena
// router.get("/all", authMiddleware, getAllOrders);

export default router;