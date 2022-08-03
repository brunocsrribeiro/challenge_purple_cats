const {
  createNewCustomer, readCustomer,
  readOneCustomer, updateCustomer,
  deleteCustomer } = require('./customer/customer_controller');
const { updateBalance } = require('./balance/balance_controller');

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
  updateBalance,
};
