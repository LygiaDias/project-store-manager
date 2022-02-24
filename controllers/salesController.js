const salesService = require('../services/salesService');

const listSale = async (req, res) => {
      const products = await salesService.listSale();
  
      return res.status(200).json(products);
  };
  const getSaleId = async (req, res) => {
      const { id } = req.params;
      const responses = await salesService.getSaleId(id);
      
      if (!responses) return res.status(404).json({ message: 'Sale not found' });
      res.status(200).json(responses);
    };

  module.exports = { listSale, getSaleId };