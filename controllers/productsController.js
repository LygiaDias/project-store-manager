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
const createProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
   const resultName = await productService.listProducts();
   const validation = resultName.some((p) => p.name === name);
   
   if (validation) return res.status(409).json({ message: 'Product already exists' });
   const result = await productService.createProduct(name, quantity);
   return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const { id } = req.params;
   const resultId = await productService.getProductId(id);
   
   if (!resultId) return res.status(404).json({ message: 'Product not found' });
   const result = await productService.updateProduct(id, name, quantity);
   return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
   const result = await productService.deleteProduct(id);
   
   if (!result) return res.status(404).json({ message: 'Product not found' });
   return res.status(204).end();
  } catch (e) {
    next(e);
  }
};

  module.exports = { listProducts, getProductId, createProduct, updateProduct, deleteProduct };