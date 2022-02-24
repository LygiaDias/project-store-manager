const express = require('express');
const productsController = require('../controllers/productsController');

const routeProduct = express.Router();

routeProduct.get('/', productsController.listProducts);
routeProduct.get('/:id', productsController.getProductId);

module.exports = routeProduct;