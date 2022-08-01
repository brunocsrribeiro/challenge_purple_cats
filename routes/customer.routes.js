const { Router } = require('express');
const controller_customer = require('../controllers');

const customerRoutes = Router();

customerRoutes
  .post('/', controller_customer.createNewCustomer)
  .get('/', controller_customer.readCustomer);

module.exports = {
  customerRoutes,
};