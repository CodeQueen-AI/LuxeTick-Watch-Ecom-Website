import Product from "../Models/Product.js"
import cloudinary from "../config/cloudinary.js"; 
import multer from "multer";

// Multer setup
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, 
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
    console.log(req.body)
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
    console.error(" Error in createProduct:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("Error in getAllProducts:", err);
    res.status(500).json({ message: "Server error" });
  }
};
