const express = require('express')
const router = express.Router()
const productController = require('../controllers/produto')

router.post('/produto', productController.createProduct)

module.exports = router