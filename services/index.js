const {
  createNewCustomer, readCustomer,
  readOneCustomer, updateCustomer,
  deleteCustomer } = require('./customer/customer_services');
const { updateBalance } = require('./balance/balance_services');

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
  updateBalance,
};
