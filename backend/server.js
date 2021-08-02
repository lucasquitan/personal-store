import express from 'express';

import data from './data.js';
const app = express();

app.get('/api/products/:id', (request, response) => {
  const product = data.products.find(x => x._id === request.params.id);

  if (!product) {
    response.status(404).send( { message: 'Product not found'});
  }

  return response.send(product);
});

app.get('/', (request, response) => {
  return response.send('Server is ready');
});

app.get('/api/products', (request, response) => {
  return response.json(data.products);
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`🚀 Server at http://localhost:${port}`);
});
