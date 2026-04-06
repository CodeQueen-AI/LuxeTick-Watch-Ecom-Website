import express from 'express';
import cors from 'cors';
import "dotenv/config";
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/orders.js"
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import contactRoutes from "./routes/contactRoutes.js"

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use("/api", contactRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.originalUrl 
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({
    message: 'Something went wrong on the server',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Server
app.listen(5000)