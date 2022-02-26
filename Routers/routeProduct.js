const express = require('express');
const productsController = require('../controllers/productsController');
const validations = require('../middlewares/validations');

const routeProduct = express.Router();

routeProduct.get('/', productsController.listProducts);
routeProduct.get('/:id', productsController.getProductId);
routeProduct.post('/', 
validations.nameValidation, 
validations.validationSale,
productsController.createProduct);
routeProduct.put('/:id', 
validations.nameValidation, 
validations.validationSale,
productsController.updateProduct);
routeProduct.delete('/:id', productsController.deleteProduct);
module.exports = routeProduct;