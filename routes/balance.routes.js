const { Router } = require('express');
const controller_balance = require('../controllers');
const { isCustomerIdValid } = require('../controllers/middlewares/validations');

const balanceRoutes = Router();

balanceRoutes
  .get('/:id/action', isCustomerIdValid, controller_balance.updateBalance);

module.exports = {
  balanceRoutes,
};