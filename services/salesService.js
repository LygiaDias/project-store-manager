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
 
 const createSale = async (array) => {
   const result = await saleModel.createSale(array);
  return result;
 };
 const updateSale = async (id, array) => {
  const result = await saleModel.updateSale(id, array);
   return result;
 };

module.exports = { listSale, getSaleId, createSale, updateSale };