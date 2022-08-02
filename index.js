const express = require('express');
const { customerRoutes, balanceRoutes } = require('./routes');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/customer', customerRoutes);
app.use('/balance', balanceRoutes);

app.listen(
  PORT, 
  () => console.log(`Running on port ${ PORT }!`),
);
