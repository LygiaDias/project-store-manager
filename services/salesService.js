const saleModel = require('../models/salesModel');
      
const listSale = async () => {
  const sales = await saleModel.getAllSales();
  return sales;
};
const getSaleId = async (id) => {
    const results = await saleModel.getSaleById(id);
    return results[0];
 };
 
 module.exports = { listSale, getSaleId };