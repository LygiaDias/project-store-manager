const salesService = require('../services/salesService');

const listSale = async (_req, res, next) => {
    try {
      const products = await salesService.listSale();
  
      return res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };
  const getSaleId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const products = await salesService.getSaleId(id);
      if (!products) return res.status(404).json({ message: 'Sale not found' });
      return res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };

  module.exports = { listSale, getSaleId };