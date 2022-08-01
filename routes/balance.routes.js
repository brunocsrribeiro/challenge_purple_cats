const { Router } = require('express');
const controller_balance = require('../controllers');

const balanceRoutes = Router();

balanceRoutes
  .post('/', controller_balance.createNewBalance)
  .get('/', controller_balance.readBalance);

module.exports = {
  balanceRoutes,
};