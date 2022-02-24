const productModel = require('../models/productModel');
      
      const getProduct = (product) => ({
        productId: product.product_id,
          name: product.name,
          quantity: product.quantity,
          
        });
      const listProducts = async () => {
        const products = await productModel.getAllProducts();
      
        return products.map(getProduct);
      };
      
      const getProductId = async (id) => {
         const products = productModel.getProductsById(id);
         return products.map(getProduct);
      };
      
      module.exports = { listProducts, 
        getProductId };