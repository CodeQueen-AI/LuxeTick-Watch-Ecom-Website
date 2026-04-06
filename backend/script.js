import express from 'express';
import cors from 'cors';
import "dotenv/config";

// Routes
// import authRoutes from './auth/routes/auth.js';
// import orderRoutes from './orders/routes/orders.js';
// import userRoutes from './auth/routes/users.js';
// import productRoutes from './products/routes/products.js';
// import connectDB from "./config/db.js"
// import contactRoutes from "./contact/routes/contactRoutes.js"

import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/orders.js"
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import connectDB from "./config/db.js"
import contactRoutes from "./routes/contactRoutes.js"

connectDB();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== Routes ====================
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use("/api", contactRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('LuxeTick Backend is running successfully...');
});

// ==================== 404 Handler ====================
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.originalUrl 
  });
});

// ==================== Global Error Handler ====================
app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({
    message: 'Something went wrong on the server',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});


console.log("ENV CHECK:");
console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📍 Test Route: http://localhost:${PORT}/`);
});



