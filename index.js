const express = require('express');
const productRouter = require('./Routers/routeProduct');
const salesRouter = require('./Routers/routeSale');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/products', productRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.use('/products', productRouter);
app.use('/sales', salesRouter);
