const JWT = require('jsonwebtoken');
const { Customer, Balance } = require('../models');
require('dotenv/config');

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '24h',
};

const secret = process.env.SECRET;

const createNewCustomer = async (dataNewCustomer) => {
  const newCustomer = await Customer.create(dataNewCustomer);

  const { password, ...newCustomerWithoutPass } = newCustomer;

  const tokenNewCustomer = JWT.sign(
    { data: newCustomerWithoutPass },
    secret,
    jwtConfig,
  );

  return { tokenNewCustomer };
}

const readCustomer = async () => {
  const allCustomers = await Customer.findAll({
    include: {
      model: Balance,
      as: 'balances',
      attributes: {
        exclude: ['id', 'customerId'],
      },
    },
    attributes: {
      exclude: ['password'],
    },
  });

  return allCustomers;
};

// const readOneCustomer = async () => {};

// const updateCustomer = async () => {};

// const deleteCustomer = async () => {};

module.exports = {
  createNewCustomer,
  readCustomer,
  // readOneCustomer,
  // updateCustomer,
  // deleteCustomer,
};