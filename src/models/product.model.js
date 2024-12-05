const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    default: [],
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Product', productSchema);
