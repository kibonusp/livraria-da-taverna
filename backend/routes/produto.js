const express = require('express')
const router = express.Router()
const productController = require('../controllers/produto')

router.post('/produto', productController.createProduct);
router.get('/produto', productController.getProducts);
router.get('/produto/:id', productController.getProduct);
router.put('/produto/:id', productController.updateProduct);
router.get('/produtos', productController.getProductsFilter);
router.delete('/produto/:id', productController.deleteProduct);
router.put('/produto/:id/image', productController.uploadImage);
router.get('/produto/:id/image', productController.getImage);

module.exports = router