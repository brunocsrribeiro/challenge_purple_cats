const {
  createNewCustomer, readCustomer,
  readOneCustomer, updateCustomer,
  deleteCustomer } = require('./customer_controller');
const {
  createNewBalance, readBalance,
  readOneBalance, updateBalance,
  deleteBalance } = require('./balance_controller');

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
  createNewBalance,
  readBalance,
  readOneBalance,
  updateBalance,
  deleteBalance,
};
