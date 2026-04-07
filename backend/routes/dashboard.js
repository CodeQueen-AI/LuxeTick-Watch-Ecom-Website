import express from "express";
import User from "../Models/user.js";
import Order from "../Models/orders.js"
import Product from "../Models/Product.js";

const router = express.Router();

// Dashboard Stats API
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();

    const revenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalPrice" } } }
    ]);
    const revenue = revenueAgg[0]?.total || 0;

    res.json({ totalUsers, totalOrders, totalProducts, revenue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;