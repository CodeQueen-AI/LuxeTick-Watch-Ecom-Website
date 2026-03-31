import express from "express";
import { createProduct, getAllProducts, upload } from "../controllers/productController.js";
import Product from "../Models/Product.js"
import cloudinary from "../config/cloudinary.js";
const router = express.Router();

// Add Product
router.post("/add", upload.single("image"), createProduct);

// Get All Products
router.get("/", getAllProducts);

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find product by ID
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Delete image from Cloudinary if exists
    if (product.publicId) {
      await cloudinary.uploader.destroy(product.publicId);
    }

    // Delete product from database
    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

export default router;