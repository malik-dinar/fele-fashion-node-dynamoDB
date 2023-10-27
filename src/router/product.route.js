
const express = require('express');
const { getCategories, addProduct, getProduct } = require('../controllers/product.controller');
const router = express.Router()

router.get('/categories', getCategories);

router.get('/list', getProduct);

router.post('/save', addProduct)

module.exports = router;    