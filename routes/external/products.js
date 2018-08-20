const express = require('express');
const router = express.Router();
const Product = require('../../helpers/productHelper');

router.get('/:id', Product.getSingleProduct);

module.exports = router;

