const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require('../controllers/product.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');


const router = express.Router();

router.get('/', getAllProducts); // GET /api/products
router.get('/:id', getProductById); // GET /api/products/:id
router.post('/',authenticateToken, createProduct); // POST /api/products

module.exports = router;
