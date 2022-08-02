const { Router } = require('express');
const controller_customer = require('../controllers');
const { idIsValid } = require('../controllers/middlewares/validations');

const customerRoutes = Router();

customerRoutes
  .post('/', controller_customer.createNewCustomer)
  .get('/', controller_customer.readCustomer)
  .get('/:id', idIsValid, controller_customer.readOneCustomer)
  .patch('/:id', idIsValid, controller_customer.updateCustomer)
  .delete('/:id', idIsValid, controller_customer.deleteCustomer);

module.exports = {
  customerRoutes,
};