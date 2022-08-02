const { Router } = require('express');
const controller_balance = require('../controllers');
const { idIsValid } = require('../controllers/middlewares/validations');

const balanceRoutes = Router();

balanceRoutes
  .put('/:id', idIsValid, controller_balance.updateBalance);

module.exports = {
  balanceRoutes,
};