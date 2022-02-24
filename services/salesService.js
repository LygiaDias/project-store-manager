const saleModel = require('../models/salesModel');
      
const listSale = async () => {
  const sales = await saleModel.getAllSales();
  return sales;
};
const getSaleId = async (id) => {
    const results = await saleModel.getSaleById(id);
    if (!results) return null;
  
    return results;
 };
 
 module.exports = { listSale, getSaleId };