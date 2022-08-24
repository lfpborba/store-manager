const modelsProduct = require('../models/Products');
const servicesProduct = require('../services/Products');

const getAllProducts = async (req, res) => {
  const prod = await modelsProduct.getAll();
  
  res.status(200).json(prod);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await modelsProduct.getProductById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(product);
};

const creatingProduct = async (req, res) => {
  const { name } = req.body;

  const createdProduct = await modelsProduct.createProduct(name);

  return res.status(201).json(createdProduct);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const updateProd = await servicesProduct.updateProduct(name, id);

  if (!updateProd) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(updateProd);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const checkProduct = await servicesProduct.checkProducts(id);

  if (!checkProduct) return res.status(404).json({ message: 'Product not found' });
  
  const deletedProduct = await servicesProduct.deleteProduct(id);

  if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

  return res.status(204).send();
};

module.exports = {
  getAllProducts,
  getById,
  creatingProduct,
  updateProduct,
  deleteProduct,
};
