import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  discount: { type: Number, default: 0 },
  newArrival: { type: Boolean, default: false },
  image: { type: String, required: true },   // ✅ make sure inside schema {}
  publicId: { type: String },
  brand: { type: String },
  color: { type: String },
  strap: { type: String },
  category: { type: String },
  gender: { type: String },
}, { timestamps: true }); // add options as second argument

const Product = mongoose.model("Product", productSchema);

export default Product;