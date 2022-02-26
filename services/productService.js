const productModel = require('../models/productModel');
      
      const listProducts = async () => {
        const result = await productModel.getAllProducts();
      
        return result;
      };
      
      const getProductId = async (id) => {
         const results = await productModel.getProductsById(id);
         return results;
      };
      
      const createProduct = async (name, quantity) => {
        const result = await productModel.createProduct(name, quantity);
        
        return { id: result,
          name, 
          quantity };
      };
      
      const updateProduct = async (id, name, quantity) => {
        await productModel.updateProduct(id, name, quantity);
        
        return { id, name, quantity };
      };
      
      const deleteProduct = async (id) => {
        const result = await productModel.deleteProduct(id);
       
        return result;
      };
   
  module.exports = { listProducts, 
        getProductId,
createProduct, 
updateProduct,
deleteProduct };