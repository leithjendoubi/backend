import express from 'express';
import {
  createProduct,
  getAllProducts,
  getUserProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsWithEmptyMarcheID
} from '../controllers/ProductController.js';
import userAuth from '../middleware/userAuth.js';
import upload from '../middleware/multer.js';

export const Productrouter = express.Router();

// Public routes (no authentication needed)
Productrouter.get('/', getAllProducts); // Get all products
Productrouter.get('/empty-marche', getProductsWithEmptyMarcheID); // Get products with marcheID: "aucun marche"
Productrouter.get('/category/:category', getProductsByCategory); // Get products by category
Productrouter.get('/:id', getProductById); // Get single product by ID
Productrouter.post('/create', upload.single('image'), createProduct);

// Protected routes (require authentication)
Productrouter.get('/user/my-products', userAuth, getUserProducts); // Get products by logged-in user
Productrouter.put('/update/:id', userAuth, updateProduct); // Update product
Productrouter.delete('/delete/:id', userAuth, deleteProduct); // Delete product

export default Productrouter;