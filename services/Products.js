const modelsProduct = require('../models/Products');

const updateProduct = async (ProductName, ProductId) => {
  const data = await modelsProduct.updateProduct(ProductName, ProductId);

  return data;
};

const deleteProduct = async (ProductId) => {
  const data = await modelsProduct.deleteProduct(ProductId);
  return data;
};

const checkProducts = async (ProductId) => {
  const data = await modelsProduct.getAll();

  const checkProduct = data.every(
    ({ id }) => Number(ProductId) !== id,
  );
  
  if (checkProduct) return false;
  return true;
};

module.exports = {
  updateProduct,
  deleteProduct,
  checkProducts,
};