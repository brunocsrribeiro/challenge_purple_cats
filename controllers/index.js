const {
  createNewCustomer, readCustomer,
  readOneCustomer, updateCustomer,
  deleteCustomer } = require('./customer_controller');
const { updateBalance } = require('./balance_controller');

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
  updateBalance,
};
