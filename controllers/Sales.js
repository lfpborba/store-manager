const modelsSales = require('../models/Sales');

const getAllSales = async (req, res) => {
  const sales = await modelsSales.getAll();
  
  res.status(200).json(sales);
};

module.exports = {
  getAllSales,
};