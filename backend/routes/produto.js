const express = require('express')
const router = express.Router()
const productController = require('../controllers/produto')

router.post('/produto', productController.createProduct);
router.get('/produto', productController.getProducts);
router.get('/produto/:id', productController.getProduct);
router.put('/produto/:id', productController.updateProduct);
router.delete('/produto/:id', productController.deleteProduct);

module.exports = router