// import Product from "../Models/Product.js"
// import cloudinary from "../config/cloudinary.js"; 
// import multer from "multer";

// // Multer setup
// export const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }, 
// });

// // Create Product
// export const createProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       stock,
//       discount,
//       newArrival,
//       brand,
//       color,
//       strap,
//       category,
//       gender,
//     } = req.body;
//     console.log(req.body)
//     // Upload image to Cloudinary
//     const uploadResult = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "luxe_tick_products", resource_type: "image" },
//         (error, result) => (error ? reject(error) : resolve(result))
//       );
//       stream.end(req.file.buffer);
//     });

//     const product = new Product({
//       name,
//       description,
//       price: Number(price),
//       stock: Number(stock),
//       discount: Number(discount) || 0,
//       newArrival: newArrival === "on",
//       image: uploadResult.secure_url,
//       publicId: uploadResult.public_id,
//       brand,
//       color,
//       strap,
//       category,
//       gender,
//     });
//     await product.save();

//     res.status(201).json({ message: "Product added successfully", product });
//   } catch (err) {
//     console.error(" Error in createProduct:", err);
//     res.status(500).json({ message: err.message || "Server error" });
//   }
// };

// // Get all products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     console.error("Error in getAllProducts:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// // UPDATE PRODUCT (🔥 ADD THIS)
// export const updateProduct = async (req, res) => {
//   try {
//     const updateData = {
//       ...req.body,
//     };

//     // 🧠 IMPORTANT: newArrival ko boolean me convert karo
//     if (req.body.newArrival !== undefined) {
//       updateData.newArrival =
//         req.body.newArrival === "true" ||
//         req.body.newArrival === true;
//     }

//     // 🖼️ agar new image ayi ho
//     if (req.file) {
//       const uploadResult = await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "luxe_tick_products", resource_type: "image" },
//           (error, result) => (error ? reject(error) : resolve(result))
//         );
//         stream.end(req.file.buffer);
//       });

//       updateData.image = uploadResult.secure_url;
//       updateData.publicId = uploadResult.public_id;
//     }

//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.json({ product });
//   } catch (error) {
//     console.error("Error in updateProduct:", error);
//     res.status(500).json({ message: "Update failed" });
//   }
// };





// backend/products/controllers/productController.js
import Product from "../Models/Product.js";
import cloudinary from "../config/cloudinary.js"
import multer from "multer";

// Multer setup
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, discount, newArrival, brand, color, strap, category, gender } = req.body;

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "luxe_tick_products", resource_type: "image" },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    const product = new Product({
      name,
      description,
      price: Number(price),
      stock: Number(stock),
      discount: Number(discount) || 0,
      newArrival: newArrival === "on",
      image: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      brand,
      color,
      strap,
      category,
      gender,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error("Error in createProduct:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("Error in getAllProducts:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Product (full edit)
export const updateProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // Convert newArrival to boolean
    if (req.body.newArrival !== undefined) {
      updateData.newArrival = req.body.newArrival === "true" || req.body.newArrival === true;
    }

    // If new image uploaded
    if (req.file) {
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "luxe_tick_products", resource_type: "image" },
          (error, result) => (error ? reject(error) : resolve(result))
        );
        stream.end(req.file.buffer);
      });

      updateData.image = uploadResult.secure_url;
      updateData.publicId = uploadResult.public_id;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ product });
  } catch (err) {
    console.error("Error in updateProduct:", err);
    res.status(500).json({ message: "Update failed" });
  }
};


// Toggle New Arrival
export const toggleNewArrival = async (req, res) => {
  try {
    console.log("Toggle request ID:", req.params.id);

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    console.log("Before toggle:", product.newArrival);

    product.newArrival = !product.newArrival;

    console.log("After toggle:", product.newArrival);

    await product.save();

    res.json({ product });
  } catch (err) {
    console.error("Error toggling New Arrival:", err);
    res.status(500).json({ message: "Toggle failed" });
  }
};
