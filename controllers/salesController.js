const salesService = require('../services/salesService');

const listSale = async (req, res, next) => {
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
      const responses = await salesService.getSaleId(id);
      
      if (!responses.length) return res.status(404).json({ message: 'Sale not found' });
      return res.status(200).json(responses);
    } catch (e) {
      next(e);
    }
    };

  module.exports = { listSale, getSaleId };