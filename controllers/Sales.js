const serviceSales = require('../services/Sales');

const getAllSales = async (req, res) => {
  const sales = await serviceSales.getAll();
  
  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;

  const { code, message, response } = await serviceSales.getSalesById(id);

  if (!response) return res.status(code).json({ message });
  
  return res.status(200).json(response);
};

module.exports = {
  getAllSales,
  getSalesById,
};