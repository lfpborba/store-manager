const connection = require('./Connections');

const getAll = async () => {
  const query = `
  SELECT * FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id`;
  
  const [result] = await connection.execute(query);

  return result;
};

const getSalesById = async (salesId) => {
  const query = `
  SELECT * FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id
  WHERE s.id = ?`;

  const [sales] = await connection.execute(query, [salesId]);

  if (!sales[0]) return null;

  return sales;
};

module.exports = {
  getAll,
  getSalesById,
};