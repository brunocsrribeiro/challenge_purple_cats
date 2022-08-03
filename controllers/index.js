const { createNewCustomer } = require('./customer/create_customer');
const { readCustomer } = require('./customer/read_customer');
const { readOneCustomer } = require('./customer/read_one_customer');
const { updateCustomer } = require('./customer/update_customer');
const { deleteCustomer } = require('./customer/delete_customer');
const { updateBalance } = require('./balance/update_balance');

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
  updateBalance,
};
