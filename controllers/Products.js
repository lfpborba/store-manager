const modelsProduct = require('../models/Products');
// const serviceProduct = require('../services/Products');

const getAll = async (req, res) => {
  const prod = await modelsProduct.getAll();
  
  res.status(200).json(prod);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await modelsProduct.getProductById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(product);
};

module.exports = {
  getAll,
  getById,
};
