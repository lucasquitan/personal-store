import express from 'express';

import data from './data.js';
const app = express();

app.get('/', (request, response) => {
  response.send('Server is ready');
});

app.get('/api/products', (request, response) => {
  return response.json(data.products);
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`🚀 Server at http://localhost:${port}`);
});
