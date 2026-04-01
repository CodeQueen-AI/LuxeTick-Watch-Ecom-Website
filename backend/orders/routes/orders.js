// import express from "express";
// import authMiddleware from "../../auth/middleware/authMiddleware.js";
// import {createOrder,getMyOrders,createOrdersFromCart,getAllOrders} from "../controllers/ordersController.js";

// const router = express.Router();

// // User Routes 
// router.post("/create", authMiddleware, createOrder);
// router.post("/create-multiple", authMiddleware, createOrdersFromCart);
// router.get("/my-orders", authMiddleware, getMyOrders);

// //  Admin Routes
// router.get("/all", getAllOrders);    

// // Temporary: ye login system lagane ke bad uncomment krdena
// // router.get("/all", authMiddleware, getAllOrders);

// export default router;





import express from "express";
import authMiddleware from "../../auth/middleware/authMiddleware.js";
import {
  createOrder,
  getMyOrders,
  createOrdersFromCart,
  getAllOrders,
} from "../controllers/ordersController.js";
import Order from "../Models/orders.js"

const router = express.Router();

// ---------------- User Routes ----------------
router.post("/create", authMiddleware, createOrder);
router.post("/create-multiple", authMiddleware, createOrdersFromCart);
router.get("/my-orders", authMiddleware, getMyOrders);

// ---------------- Admin Routes ----------------
router.get("/all", getAllOrders);    
// Temporary: ye login system lagane ke bad uncomment krdena
// router.get("/all", authMiddleware, getAllOrders);

// ---------------- Status Update Route ----------------
router.patch("/:id/status", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).populate("user", "name email");

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error("Error updating order status:", err.message);
    res.status(500).json({ message: "Failed to update status" });
  }
});

export default router;