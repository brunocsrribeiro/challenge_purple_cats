const { Customer, Balance } = require('../../models');
require('dotenv/config');

const readCustomer = async () => {
  const allCustomers = await Customer.findAll({
    include: { model: Balance, as: 'balances', attributes: {
      exclude: ['id', 'customerId'],
    },
  },
    attributes: {
      exclude: ['password'],
    },
  });

  return allCustomers;
};

module.exports = { readCustomer };
