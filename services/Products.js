const modelsProduct = require('../models/Products');

const updateProduct = async (ProductName, ProductId) => {
  const data = await modelsProduct.updateProduct(ProductName, ProductId);

  return data;
};

module.exports = {
  updateProduct,
};