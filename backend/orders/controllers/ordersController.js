// import Order from "../Models/orders.js";

// // Create Single Order
// export const createOrder = async (req, res) => {
//   try {
//     const { productName, image, price, quantity } = req.body;

//     // Safe validation (better than removing completely)
//     if (!productName || !price || !quantity) {
//       return res.status(400).json({
//         message: "Please provide productName, price, and quantity",
//       });
//     }

//     const order = await Order.create({
//       user: req.user?.id,   // safe access
//       productName,
//       image: image || "",   
//       price,
//       quantity,
//       status: "Pending",
//       date: new Date(),
//     });

//     console.log("Order created:", order._id);

//     res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       order,
//     });

//   } catch (err) {
//     console.error("Error creating order:", err.message);

//     res.status(500).json({
//       success: false,
//       message: "Server error while creating order",
//     });
//   }
// };

// // Create Orders From Cart
// export const createOrdersFromCart = async (req, res) => {
//   try {
//     const { cartItems } = req.body;

//     if (!cartItems || cartItems.length === 0) {
//       return res.status(400).json({
//         message: "Cart is empty",
//       });
//     }

//     const orders = await Promise.all(
//       cartItems.map((item) =>
//         Order.create({
//           user: req.user?.id,
//           productName: item.name,
//           image: item.image || "",
//           price: item.price,
//           quantity: item.quantity,
//           status: "Pending",
//           date: new Date(),
//         })
//       )
//     );

//     console.log(`${orders.length} orders created from cart`);

//     res.status(201).json({
//       success: true,
//       message: "Orders created successfully",
//       count: orders.length,
//       orders,
//     });

//   } catch (err) {
//     console.error("Error creating orders from cart:", err.message);

//     res.status(500).json({
//       success: false,
//       message: "Server error while creating orders",
//     });
//   }
// };

// // Get My Orders
// // export const getMyOrders = async (req, res) => {
// //   try {
// //     const orders = await Order.find({ user: req.user?.id })
// //       .sort({ date: -1 });

// //     res.status(200).json({
// //       success: true,
// //       orders,
// //     });

// //   } catch (err) {
// //     console.error("Error fetching my Orders:", err.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Server error while fetching orders",
// //     });
// //   }
// // };

// // Get My Orders
// export const getMyOrders = async (req, res) => {
//   try {
//     console.log("Fetching orders for user:", req.user?.id);
    
//     const orders = await Order.find({ user: req.user?.id }).sort({ date: -1 });
    
//     console.log(`Found ${orders.length} orders for user ${req.user?.id}`);

//     res.status(200).json({
//       success: true,
//       orders: orders, // Make sure it's explicitly 'orders'
//     });
//   } catch (err) {
//     console.error("Error fetching my Orders:", err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching orders",
//     });
//   }
// };


// // Admin: Get All Orders 
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("user", "name email")
//       .sort({ date: -1 });

//     console.log(`Admin fetched ${orders} orders`);

//     res.status(200).json({
//       success: true,
//       total: orders.length,
//       orders,
//     });

//   } catch (err) {
//     console.error("Error fetching all orders:", err.message);

//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching all orders",
//     });
//   }
// };



// import Order from "../Models/orders.js";  // ✅ Sirf YEH EK BAAR HONA CHAHIYE

// // Create Single Order
// export const createOrder = async (req, res) => {
//   try {
//     const { productName, image, price, quantity } = req.body;

//     if (!productName || !price || !quantity) {
//       return res.status(400).json({
//         message: "Please provide productName, price, and quantity",
//       });
//     }

//     const order = await Order.create({
//       user: req.user?.id,
//       productName,
//       image: image || "",
//       price,
//       quantity,
//       status: "pending",
//       date: new Date(),
//     });

//     res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       order,
//     });

//   } catch (err) {
//     console.error("Error creating order:", err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error while creating order",
//     });
//   }
// };

// // Create Orders From Cart
// export const createOrdersFromCart = async (req, res) => {
//   try {
//     const { cartItems } = req.body;

//     if (!cartItems || cartItems.length === 0) {
//       return res.status(400).json({
//         message: "Cart is empty",
//       });
//     }

//     const orders = await Promise.all(
//       cartItems.map((item) =>
//         Order.create({
//           user: req.user?.id,
//           productName: item.name,
//           image: item.image || "",
//           price: item.price,
//           quantity: item.quantity,
//           status: "pending",
//           date: new Date(),
//         })
//       )
//     );

//     res.status(201).json({
//       success: true,
//       message: "Orders created successfully",
//       count: orders.length,
//       orders,
//     });

//   } catch (err) {
//     console.error("Error creating orders from cart:", err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error while creating orders",
//     });
//   }
// };

// // Get My Orders
// export const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user?.id }).sort({ date: -1 });

//     res.status(200).json({
//       success: true,
//       orders: orders,
//     });
//   } catch (err) {
//     console.error("Error fetching my Orders:", err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching orders",
//     });
//   }
// };

// // Admin: Get All Orders 
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("user", "name email")
//       .sort({ date: -1 });

//     res.status(200).json({
//       success: true,
//       total: orders.length,
//       orders,
//     });

//   } catch (err) {
//     console.error("Error fetching all orders:", err.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching all orders",
//     });
//   }
// };

// // Update Order Status
// export const updateOrderStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   if (!status) {
//     return res.status(400).json({ message: "Status is required" });
//   }

//   try {
//     const updatedOrder = await Order.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     ).populate("user", "name email");

//     if (!updatedOrder) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.status(200).json(updatedOrder);
//   } catch (err) {
//     console.error("Error updating order status:", err.message);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// };

// // Delete Order
// export const deleteOrder = async (req, res) => {
//   const { id } = req.params;
  
//   try {
//     const order = await Order.findByIdAndDelete(id);
    
//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }
    
//     res.status(200).json({ message: "Order deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting order:", err.message);
//     res.status(500).json({ message: "Failed to delete order" });
//   }
// };











import Order from "../Models/orders.js";
import Product from "../../products/Models/Product.js"

// Create Single Order
export const createOrder = async (req, res) => {
  try {
    const { productId, productName, image, price, quantity } = req.body;

    if (!productName || !price || !quantity) {
      return res.status(400).json({
        message: "Please provide productName, price, and quantity",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Available: ${product.stock}`,
      });
    }

    const order = await Order.create({
      user: req.user?.id,
      productName,
      image: image || "",
      price,
      quantity,
      status: "pending",
      date: new Date(),
    });

    await Product.findByIdAndUpdate(productId, {
      $inc: { stock: -quantity }
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });

  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error while creating order",
    });
  }
};

// Create Orders From Cart
export const createOrdersFromCart = async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    // Check stock first
    for (const item of cartItems) {
      const product = await Product.findById(item.id);
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.name} not found`,
        });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${item.name}. Available: ${product.stock}`,
        });
      }
    }

    // Create orders and update stock
    const orders = await Promise.all(
      cartItems.map(async (item) => {
        const order = await Order.create({
          user: req.user?.id,
          productName: item.name,
          image: item.image || "",
          price: item.price,
          quantity: item.quantity,
          status: "pending",
          date: new Date(),
        });

        await Product.findByIdAndUpdate(
          item.id,
          { $inc: { stock: -item.quantity } }
        );

        return order;
      })
    );

    res.status(201).json({
      success: true,
      message: "Orders created successfully",
      count: orders.length,
      orders,
    });

  } catch (err) {
    console.error("Error creating orders from cart:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error while creating orders",
    });
  }
};

// Get My Orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user?.id }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (err) {
    console.error("Error fetching my Orders:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching orders",
    });
  }
};

// Admin: Get All Orders 
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      total: orders.length,
      orders,
    });

  } catch (err) {
    console.error("Error fetching all orders:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching all orders",
    });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
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
};

// Delete Order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  
  try {
    const order = await Order.findByIdAndDelete(id);
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Error deleting order:", err.message);
    res.status(500).json({ message: "Failed to delete order" });
  }
};

// Check stock before checkout
export const checkStock = async (req, res) => {
  try {
    const { cartItems } = req.body;

    for (const item of cartItems) {
      const product = await Product.findById(item.id);
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.name} not found`,
        });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${item.name}. Available: ${product.stock}`,
        });
      }
    }

    res.status(200).json({
      success: true,
      message: "Stock available",
    });
  } catch (err) {
    console.error("Stock check error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error while checking stock",
    });
  }
};







