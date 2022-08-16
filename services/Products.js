const products = require('../models/Products');

const getById = async (id) => {
  const [prod] = await products.getProductById(id);

  return prod;
};

module.exports = {
  getById,
};