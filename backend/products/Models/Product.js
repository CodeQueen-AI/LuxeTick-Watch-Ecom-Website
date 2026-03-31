// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   stock: { type: Number, required: true, default: 0 },
//   discount: { type: Number, default: 0 },
//   image: { type: String, required: true },        // Cloudinary URL
//   publicId: { type: String },                     // Cloudinary public_id (delete ke liye)
// }, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);
// export default Product;





// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   stock: { type: Number, required: true, default: 0 },
//   discount: { type: Number, default: 0 },
//   newArrival: { type: Boolean, default: false },  // New Arrival tag
//   image: { type: String, required: true },
//   publicId: { type: String },
//   brand: { type: String },                        // Brand Name
//   color: { type: String },
//   strap: { type: String },
//   category: { type: String },
//   gender: { type: String, enum: ["Male", "Female"] }, 
// }, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);
// export default Product;






import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  discount: { type: Number, default: 0 },
  newArrival: { type: Boolean, default: false },
  image: { type: String, required: true },
  publicId: { type: String },
  brand: { type: String },
  color: { type: String },
  strap: { type: String },
  category: { type: String },
  gender: { type: String, enum: ["Male", "Female"] },
}, { timestamps: true });

// ✅ Fix OverwriteModelError
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
