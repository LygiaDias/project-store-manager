const productService = require('../services/productService');

const listProducts = async (_req, res, next) => {
    try {
      const result = await productService.listProducts();
  
      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };
  const getProductId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const products = await productService.getProductId(id);
      if (!products) return res.status(404).json({ message: 'Product not found' });
      return res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };

  module.exports = { listProducts, getProductId };