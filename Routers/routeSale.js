const express = require('express');
const salesController = require('../controllers/salesController');
const validations = require('../middlewares/validations');

const routerSales = express.Router();
routerSales.get('/', salesController.listSale);
routerSales.get('/:id', salesController.getSaleId);
routerSales.post('/', validations.quantityValidation,
validations.productIdValidation);
module.exports = routerSales;