// import Order from "../Models/orders.js";

// // Create order
// export const createOrder = async (req, res) => {
//   try {
//     console.log("Creating order for user:", req.user); // ✅ see which user is creating
//     const { productName, image, price } = req.body;

//     const order = await Order.create({
//       user: req.user.id, // make sure this exists
//       productName,
//       image,
//       price,
//       status: "Pending", // optional: track order status
//       date: new Date()    // optional: track order date
//     });

//     console.log("Order created:", order); // ✅ see order saved
//     res.status(201).json(order);
//   } catch (err) {
//     console.error("Error creating order:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get logged in user's orders
// export const getMyOrders = async (req, res) => {
//   try {
//     console.log("Fetching orders for user:", req.user); // ✅ see user requesting orders

//     const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
//     console.log("Orders found:", orders); // ✅ see what is returned

//     res.json(orders); // array of orders
//   } catch (err) {
//     console.error("Error fetching orders:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };

















// // ordersController.js
// import Order from "../Models/orders.js";

// // ✅ Create a single order
// export const createOrder = async (req, res) => {
//   try {
//     const { productName, image, price } = req.body;

//     const order = await Order.create({
//       user: req.user.id,
//       productName,
//       image,
//       price,
//       status: "Pending",
//       date: new Date(),
//     });

//     console.log("Order created:", order);
//     res.status(201).json(order);
//   } catch (err) {
//     console.error("Error creating order:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Get all orders of the logged-in user
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
//     console.log("Orders fetched:", orders);
//     res.json(orders);
//   } catch (err) {
//     console.error("Error fetching orders:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Create multiple orders from cart items after payment
// export const createOrdersFromCart = async (req, res) => {
//   try {
//     const { cartItems } = req.body;

//     if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const orders = await Promise.all(
//       cartItems.map(item =>
//         Order.create({
//           user: req.user.id,
//           productName: item.name,
//           image: item.image,
//           price: item.price,
//           status: "Pending",
//           date: new Date(),
//         })
//       )
//     );

//     console.log("Multiple orders created:", orders);
//     res.status(201).json({ message: "Orders created successfully", orders });
//   } catch (err) {
//     console.error("Error creating multiple orders:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };




















// import Order from "../Models/orders.js";

// // Single order
// export const createOrder = async (req, res) => {
//   try {
//     const { productName, image, price } = req.body;
//     const order = await Order.create({ user: req.user.id, productName, image, price, status: "Pending", date: new Date() });
//     console.log("Order created:", order);
//     res.status(201).json(order);
//   } catch (err) {
//     console.error("Error creating order:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get logged-in user's orders
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
//     console.log("Orders fetched:", orders);
//     res.json(orders);
//   } catch (err) {
//     console.error("Error fetching orders:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };

// // Create multiple orders from cart
// export const createOrdersFromCart = async (req, res) => {
//   try {
//     const { cartItems } = req.body;
//     console.log("Cart items received for order creation:", cartItems);

//     if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0)
//       return res.status(400).json({ message: "Cart is empty" });

//     const orders = await Promise.all(cartItems.map(item =>
//       Order.create({ user: req.user.id, productName: item.name, image: item.image, price: item.price, status: "Pending", date: new Date() })
//     ));

//     console.log("Multiple orders created:", orders);
//     res.status(201).json({ message: "Orders created successfully", orders });
//   } catch (err) {
//     console.error("Error creating multiple orders:", err.message);
//     res.status(500).json({ message: err.message });
//   }
// };


























import Order from "../Models/orders.js";

// Create single order
export const createOrder = async (req, res) => {
  try {
    const { productName, image, price, quantity } = req.body;

    const order = await Order.create({
      user: req.user.id,
      productName,
      image,
      price,
      quantity,
      status: "Pending",
      date: new Date(),
    });

    console.log("Order created:", order);

    res.status(201).json(order);
  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Create multiple orders from cart
export const createOrdersFromCart = async (req, res) => {
  try {
    const { cartItems } = req.body;

    console.log("Cart items received for order creation:", cartItems);

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const orders = await Promise.all(
      cartItems.map((item) =>
        Order.create({
          user: req.user.id,
          productName: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          status: "Pending",
          date: new Date(),
        })
      )
    );

    console.log("Multiple orders created:", orders);

    res.status(201).json({
      message: "Orders created successfully",
      orders,
    });
  } catch (err) {
    console.error("Error creating orders:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get logged in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });

    console.log("Orders fetched:", orders);

    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).json({ message: err.message });
  }
};