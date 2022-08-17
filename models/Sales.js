const connection = require('./Connections');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM sales;');

  return result;
};

module.exports = {
  getAll,
};