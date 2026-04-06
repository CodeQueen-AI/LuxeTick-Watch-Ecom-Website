import express from "express";
import { createProduct, getAllProducts, updateProduct, upload, toggleNewArrival} from "../controllers/productController.js";
import Product from "../Models/Product.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Add Product
router.post("/add", upload.single("image"), createProduct);

// Get All Products
router.get("/", getAllProducts);

// Update Product 
router.put("/:id", upload.single("image"), updateProduct);

router.get("/:id", async (req, res) => {
  try {
    console.log("PRODUCT ROUTE HIT"); 

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// New Arrival Toggle
router.put("/:id/toggle-new", toggleNewArrival);

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find product
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Delete image from Cloudinary if exists
    if (product.publicId) {
      await cloudinary.uploader.destroy(product.publicId);
    }

    // Delete product from DB
    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

export default router;