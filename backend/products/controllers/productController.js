// import Product from "../Models/Product.js";
// import { v2 as cloudinary } from 'cloudinary';
// import multer from 'multer';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// // Multer setup for memory storage
// const upload = multer({ 
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
// });

// // Create New Product
// export const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, stock, discount } = req.body;

//     // Basic validation
//     if (!name || !description || !price || !stock) {
//       return res.status(400).json({ message: "Name, description, price and stock are required" });
//     }

//     if (!req.file) {
//       return res.status(400).json({ message: "Product image is required" });
//     }

//     // Check if Cloudinary credentials are set
//     if (!process.env.CLOUDINARY_CLOUD_NAME || 
//         !process.env.CLOUDINARY_API_KEY || 
//         !process.env.CLOUDINARY_API_SECRET) {
//       return res.status(500).json({ 
//         message: "Cloudinary configuration is missing. Please check your .env file" 
//       });
//     }

//     console.log("Uploading image to Cloudinary...");

//     // Upload image to Cloudinary
//     const uploadResult = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { 
//           folder: "luxe_tick_products",
//           resource_type: "image"
//         },
//         (error, result) => {
//           if (error) {
//             console.error("Cloudinary upload error:", error);
//             reject(error);
//           } else {
//             resolve(result);
//           }
//         }
//       );
//       stream.end(req.file.buffer);
//     });

//     // Save product to database
//     const product = new Product({
//       name,
//       description,
//       price: Number(price),
//       stock: Number(stock),
//       discount: Number(discount) || 0,
//       image: uploadResult.secure_url,
//       publicId: uploadResult.public_id,
//     });

//     await product.save();

//     console.log("✅ Product added successfully:", product.name);

//     res.status(201).json({
//       message: "Product added successfully",
//       product
//     });

//   } catch (err) {
//     console.error("❌ Error in createProduct:", err);
//     res.status(500).json({ 
//       message: err.message || "Server error while adding product" 
//     });
//   }
// };

// // Get All Products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ message: "Server error while fetching products" });
//   }
// };

// export { upload };








// import Product from "../Models/Product.js";
// import { v2 as cloudinary } from "cloudinary";
// import multer from "multer";

// // Multer setup
// const upload = multer({ 
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }
// });

// // Create Product
// export const createProduct = async (req, res) => {
//   try {
//     // ✅ Cloudinary config yahan shift kiya
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });

//     const { name, description, price, stock, discount } = req.body;

//     if (!name || !description || !price || !stock) {
//       return res.status(400).json({ message: "All required fields missing" });
//     }

//     if (!req.file) {
//       return res.status(400).json({ message: "Product image is required" });
//     }

//     console.log("Uploading image to Cloudinary...");

//     const uploadResult = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         {
//           folder: "luxe_tick_products",
//           resource_type: "image",
//         },
//         (error, result) => {
//           if (error) return reject(error);
//           resolve(result);
//         }
//       );

//       stream.end(req.file.buffer);
//     });

//     const product = new Product({
//       name,
//       description,
//       price: Number(price),
//       stock: Number(stock),
//       discount: Number(discount) || 0,
//       image: uploadResult.secure_url,
//       publicId: uploadResult.public_id,
//     });

//     await product.save();

//     res.status(201).json({
//       message: "Product added successfully",
//       product,
//     });

//   } catch (err) {
//     console.error("❌ Error in createProduct:", err);
//     res.status(500).json({
//       message: err.message || "Server error",
//     });
//   }
// };

// // Get All Products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export { upload };










// import Product from "../models/Product.js";
// import { v2 as cloudinary } from "cloudinary";
// import multer from "multer";

// // Multer setup
// export const upload = multer({ 
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
// });

// // Create Product
// export const createProduct = async (req, res) => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });

//     const { name, description, price, stock, discount, newArrival, brand, color, strap, category, gender } = req.body;

//     if (!name || !description || !price || !stock) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     if (!req.file) return res.status(400).json({ message: "Product image is required" });

//     const uploadResult = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "luxe_tick_products", resource_type: "image" },
//         (error, result) => error ? reject(error) : resolve(result)
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
//     console.error("❌ Error in createProduct:", err);
//     res.status(500).json({ message: err.message || "Server error" });
//   }
// };

// // Get all products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     console.error("❌ Error in getAllProducts:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };






// import Product from "../models/Product.js";
// import { v2 as cloudinary } from "cloudinary";
// import multer from "multer";

// // Configure Cloudinary once at the top
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Multer setup
// export const upload = multer({ 
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
// });

// // Create Product
// export const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, stock, discount, newArrival, brand, color, strap, category, gender } = req.body;

//     if (!name || !description || !price || !stock) {
//       return res.status(400).json({ message: "Required fields missing" });
//     }

//     if (!req.file) return res.status(400).json({ message: "Product image is required" });

//     // Upload image to Cloudinary
//     const uploadResult = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "luxe_tick_products", resource_type: "image" },
//         (error, result) => error ? reject(error) : resolve(result)
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
//     console.error("❌ Error in createProduct:", err);
//     res.status(500).json({ message: err.message || "Server error" });
//   }
// };

// // Get all products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     console.error("❌ Error in getAllProducts:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };



import Product from "../Models/Product.js"
import cloudinary from "../config/cloudinary.js"; // ✅ use config file
import multer from "multer";

// Multer setup
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      discount,
      newArrival,
      brand,
      color,
      strap,
      category,
      gender,
    } = req.body;

    if (!name || !description || !price || !stock) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    if (!req.file)
      return res.status(400).json({ message: "Product image is required" });

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
    console.error("❌ Error in createProduct:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("❌ Error in getAllProducts:", err);
    res.status(500).json({ message: "Server error" });
  }
};










