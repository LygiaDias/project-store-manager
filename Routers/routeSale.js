const express = require('express');
const salesController = require('../controllers/salesController');

const routerSales = express.Router();
routerSales.get('/', salesController.listSale);
routerSales.get('/:id', salesController.getSaleId);

module.exports = routerSales;