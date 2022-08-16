const connection = require('./Connections');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products;');

  return result;
};

const getProductById = async (productId) => {
  const query = 'SELECT * from products WHERE id=?;';

  const [[product]] = await connection.execute(query, [productId]);

  if (!product) return null;

  return product;
};

module.exports = {
  getAll,
  getProductById,
};