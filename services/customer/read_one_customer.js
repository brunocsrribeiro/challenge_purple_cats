const { Customer, Balance } = require('../../models');
require('dotenv/config');

const readOneCustomer = async (id) => {
  const oneCustomer = await Customer.findByPk(id, {
    include: { model: Balance, as: 'balances', attributes: {
      exclude: ['id', 'customerId'],
    },
  },
    attributes: {
      exclude: ['password'],
    },
  });

  return oneCustomer;
};

module.exports = { readOneCustomer };
