const modelsSales = require('../models/Sales');

const getAllSales = async (req, res) => {
  const sales = await modelsSales.getAll();
  
  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const sales = await modelsSales.getSalesById(id);

  if (!sales) return res.status(404).json({ message: 'Sale not found' });
  
  return res.status(200).json(sales);
};

module.exports = {
  getAllSales,
  getSalesById,
};