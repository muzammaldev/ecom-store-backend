const express = require('express');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const cors = require('cors');

// const CORS={
//     origin: 'http://localhost:3000', // Allow requests from this origin
//     methods: ['GET', 'POST'],       // Allow specific methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
//   }

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
