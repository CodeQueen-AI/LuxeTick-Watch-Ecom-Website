// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import authRoutes from './auth/routes/auth.js';

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Auth routes
// app.use('/api/auth', authRoutes);

// app.listen(5000)






// // script.js
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// // Routes
// import authRoutes from './auth/routes/auth.js';
// import orderRoutes from './orders/routes/orders.js';

// dotenv.config();
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);      // Auth routes: signup / login
// app.use('/api/orders', orderRoutes);   // Orders routes: create / my-orders

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });












// script.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import authRoutes from './auth/routes/auth.js';
import orderRoutes from './orders/routes/orders.js';
import userRoutes from './auth/routes/users.js';        // ← Naya Users Route

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);      // Signup, Login etc.
app.use('/api/orders', orderRoutes);   // Orders related
app.use('/api/users', userRoutes);     // ← Naya: All Users for Admin

// Test Route
app.get('/', (req, res) => {
  res.send('LuxeTick Backend is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});