// import express from "express";
// import { createProduct, getAllProducts, upload } from "../controllers/productController.js";

// const router = express.Router();

// router.post("/add", upload.single('image'), createProduct);   // Image upload ke liye
// router.get("/all", getAllProducts);

// export default router;



// import express from "express";
// import { createProduct, getAllProducts, upload } from "../controllers/productController.js";

// const router = express.Router();

// router.post("/add", upload.single('image'), createProduct);
// router.get("/", getAllProducts); // ✅ FIX

// export default router;








import express from "express";
import { createProduct, getAllProducts, upload } from "../controllers/productController.js";
import Product from "../models/Product.js";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

// Add Product
router.post("/add", upload.single("image"), createProduct);

// Get All Products
router.get("/", getAllProducts);

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Delete image from Cloudinary if exists
    if (product.publicId) {
      await cloudinary.uploader.destroy(product.publicId);
    }

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
});

export default router;