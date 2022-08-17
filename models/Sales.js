const connection = require('./Connections');

const getAll = async () => {
  const query = `SELECT 
  sp.sale_id AS saleId,
  s.date, 
  sp.product_Id AS productId,
  sp.quantity 
  FROM sales s
  INNER JOIN sales_products sp
  on s.id = sp.sale_id`;
  
  const [result] = await connection.execute(query);

  return result;
};

const getSalesById = async (salesId) => {
  const query = `SELECT s.date,
  sp.product_Id AS productId,
  sp.quantity 
  FROM sales s
  INNER JOIN sales_products sp
  on s.id = sp.sale_id
  WHERE sale_id=?`;

  const [[sales]] = await connection.execute(query, [salesId]);

  if (!sales) return null;

  return sales;
};

module.exports = {
  getAll,
  getSalesById,
};