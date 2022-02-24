const productModel = require('../models/productModel');
      
      const listProducts = async () => {
        const result = await productModel.getAllProducts();
      
        return result;
      };
      
      const getProductId = async (id) => {
         const results = await productModel.getProductsById(id);
         return results;
      };
      
      module.exports = { listProducts, 
        getProductId };