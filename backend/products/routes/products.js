import express from "express";
import { createProduct, getAllProducts, upload } from "../controllers/productController.js";
import Product from "../Models/Product.js"
import cloudinary from "../config/cloudinary.js";
const router = express.Router();

// Add Product
router.post("/add", upload.single("image"), createProduct);

// Get All Products
router.get("/", getAllProducts);

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // IMAGE
    if (req.file) {
      if (product.publicId) {
        await cloudinary.uploader.destroy(product.publicId);
      }
      product.image = req.file.path;          // URL of uploaded image
      product.publicId = req.file.filename;   // publicId for Cloudinary
    }

    // UPDATE ALL FIELDS
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price ? Number(req.body.price) : product.price;
    product.stock = req.body.stock ? Number(req.body.stock) : product.stock;
    product.discount = req.body.discount ? Number(req.body.discount) : product.discount;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.color = req.body.color || product.color;
    product.strap = req.body.strap || product.strap;
    product.gender = req.body.gender || product.gender;
    product.newArrival = req.body.newArrival === "on"; // checkbox returns "on" if checked

    await product.save();

    res.json({ message: "Product updated", product });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

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