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

const createProduct = async (ProductName) => {
  const query = 'INSERT INTO products(name) VALUES (?);';

  const [createdProduct] = await connection.execute(query, [ProductName]);

  if (!createdProduct) return null;

  return { id: createdProduct.insertId, name: ProductName };
};

const updateProduct = async (ProductName, ProductId) => {
  const query = 'UPDATE products SET name=? WHERE id=?';

  const updatedProduct = await connection.execute(query, [ProductName, ProductId]);

  if (!updatedProduct) return null;

  return getProductById(ProductId);
};

const deleteProduct = async (productId) => {
  const query = 'DELETE FROM products WHERE id=?';

  const deletedProduct = await connection.execute(query, [productId]);
  return deletedProduct;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};