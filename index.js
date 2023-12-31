const express = require('express');
const app = require('./app');
require('dotenv').config();

app.use(express.json());

const productController = require('./controllers/Products');
const salesController = require('./controllers/Sales');
const validateName = require('./middlewares/ValidateProducts');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.get('/products', productController.getAllProducts);

app.get('/products/:id', productController.getById);

app.post('/products', validateName, productController.creatingProduct);

app.put('/products/:id', validateName, productController.updateProduct);

app.delete('/products/:id', productController.deleteProduct);

app.get('/sales', salesController.getAllSales);

app.get('/sales/:id', salesController.getSalesById);

// app.post('/sales', salesController.insertSales);