const express = require('express');
const router = express.Router();
const productController = require('../controllers/produto');
const userController = require('../controllers/user');

// admin only
router.post('/produto', userController.validateToken, productController.createProduct);

// anyone
router.get('/produto', productController.getProducts);

// anyone
router.get('/produto/:id', productController.getProduct);

// admin only
router.put('/produto/:id', userController.validateToken, productController.updateProduct);

// anyone
router.get('/produtos', productController.getProductsFilter);

// admin only
router.delete('/produto/:id', userController.validateToken, productController.deleteProduct);

// admin only
router.put('/produto/:id/image', userController.validateToken, productController.uploadImage);

// anyone
router.get('/produto/:id/image', productController.getImage);

module.exports = router;