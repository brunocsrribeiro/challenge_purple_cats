const express = require('express');
const { customerRoutes } = require('./routes');
require('dotenv/config');

const app = express();

app.use(express.json());

app.use('/customer', customerRoutes);

app.listen(
  process.env.PORT, 
  () => console.log(`Running on port ${ process.env.PORT }`),
);
