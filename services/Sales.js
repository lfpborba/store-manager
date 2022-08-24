const modelsSales = require('../models/Sales');

const serialize = (data) => {
  let result = [];

  data.forEach((item) => {
    result = [...result, {
      saleId: item.sale_id,
      date: item.date,
      productId: item.product_id,
      quantity: item.quantity,
    }];
  });
  return result;
};

const getAll = async () => {
  const data = await modelsSales.getAll();
  const serializedData = serialize(data);

  return serializedData;
};

const getSalesById = async (id) => {
  const data = await modelsSales.getSalesById(id);

  if (!data) return { code: 404, message: 'Sale not found' };

  const serializedData = serialize(data)
    .map(({ date, productId, quantity }) => ({ date, productId, quantity }));
  return { response: serializedData };
};

module.exports = {
  getAll,
  getSalesById,
};