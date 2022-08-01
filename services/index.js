const {
  createNewCustomer, readCustomer,
  readOneCustomer, updateCustomer,
  deleteCustomer } = require('./customer_services');
const {
  createNewBalance, readBalance,
  readOneBalance, updateBalance,
  deleteBalance } = require('./balance_services');

module.exports = {
  createNewCustomer,
  readCustomer,
  // readOneCustomer,
  // updateCustomer,
  // deleteCustomer,
  createNewBalance,
  readBalance,
  // readOneBalance,
  // updateBalance,
  // deleteBalance,
};
