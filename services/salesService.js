const saleModel = require('../models/salesModel');
      
const getSale = (sale) => ({
    saleId: sale.sale_id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
    
  });
const listSale = async () => {
  const products = await saleModel.getAllSales();

  return products.map(getSale);
};
const getSaleId = async (id) => {
    const products = await saleModel.getSaleById(id);
    return products.map(getSale);
 };
 
module.exports = { listSale, getSaleId };