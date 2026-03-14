import Order from "../Models/order.js";

// Create order
export const createOrder = async (req, res) => {
  try {
    const { productName, image, price } = req.body;

    const order = await Order.create({
      user: req.user.id,
      productName,
      image,
      price,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get logged in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
    res.json(orders); // ✅ directly array
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};