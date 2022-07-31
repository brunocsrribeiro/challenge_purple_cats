const { Router } = require('express');
const controller_customer = require('../controllers');

const customerRoutes = Router();

customerRoutes.get('/', controller_customer.read);

module.exports = {
  customerRoutes,
};
