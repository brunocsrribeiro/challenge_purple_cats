const { Customer, Balance } = require('../models');
require('dotenv/config');

const createNewBalance = async (dataNewCustomer) => {
  const newBalance = await Balance.create(dataNewCustomer);

  return newBalance;
}

const readBalance = async () => {
  const allBalances = await Balance.findAll({
    attributes: {
      exclude: ['id', 'customerId'],
    },
  });

  return allBalances;
};

// const readOneBalance = async () => {};

// const updateBalance = async () => {};

// const deleteBalance = async () => {};

module.exports = {
  createNewBalance,
  readBalance,
  // readOneBalance,
  // updateBalance,
  // deleteBalance,
};