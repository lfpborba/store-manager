const app = require('./app');
require('dotenv').config();

const products = require('./models/Products');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto.
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', async (req, res) => {
  const prod = await products.getAll();

  res.status(200).json(prod);
});
