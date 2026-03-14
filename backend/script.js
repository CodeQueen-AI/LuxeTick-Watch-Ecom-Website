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








import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './auth/routes/auth.js';
import orderRoutes from './orders/routes/orderRoutes.js';   // 👈 add this

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Orders routes
app.use('/api/orders', orderRoutes);   // 👈 add this

app.listen(5000, () => {
  console.log("Server running on port 5000");
});