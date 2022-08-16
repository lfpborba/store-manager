const express = require('express');
const app = require('./app');
require('dotenv').config();

app.use(express.json());

const productController = require('./controllers/Products');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto.
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productController.getAll);

app.get('/products/:id', productController.getById);

app.post('/products', productController.creatingProduct);