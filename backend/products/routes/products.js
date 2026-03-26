import express from "express";
import { createProduct, getAllProducts, upload } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", upload.single('image'), createProduct);   // Image upload ke liye
router.get("/all", getAllProducts);

export default router;