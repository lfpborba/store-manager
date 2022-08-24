const { json } = require('docker/src/languages');
const ServiceSales = require('../services/Sales');

const getAllSales = async (req, res) => {
  const sales = await ServiceSales.getAll();
  
  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const { message, code, response } = await ServiceSales.getSalesById(id);

  if (!response) return res.status(404).json({ message: 'Sale not found' });
  
  return res.status(200).json(response);
};

module.exports = {
  getAllSales,
  getSalesById,
};