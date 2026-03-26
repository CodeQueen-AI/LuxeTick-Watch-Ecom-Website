import Product from "../Models/Product.js";
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() });

// Create New Product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, discount } = req.body;

    if (!req.file) return res.status(400).json({ message: "Image is required" });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      { folder: "luxe_tick_products" },
      (error, uploadResult) => {
        if (error) return res.status(500).json({ message: "Cloudinary upload failed" });

        // Save to MongoDB
        const product = new Product({
          name,
          description,
          price: Number(price),
          stock: Number(stock),
          discount: Number(discount) || 0,
          image: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        });

        product.save()
          .then(savedProduct => {
            res.status(201).json({
              message: "Product added successfully",
              product: savedProduct
            });
          })
          .catch(err => res.status(500).json({ message: err.message }));
      }
    );

    result.end(req.file.buffer);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while adding product" });
  }
};

// Get All Products (Admin ke liye)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { upload };