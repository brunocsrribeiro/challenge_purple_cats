const { sign } = require('jsonwebtoken');
const { Customer, Balance } = require('../models');
require('dotenv/config');

const createNewCustomer = async (dataNewCustomer) => {
  const secret = process.env.SECRET;
  const jwtConfig = { algorithm: 'HS256' };
  
  const { account, holder, password, balance } = dataNewCustomer;

  const { id } = await Customer.create(
    { account, holder, password }, 
    { attributes: { exclude: ['password'] } },
  );   

  await Balance.create({ balance, customerId: id });
  
  const tokenNewCustomer = sign(
    { data: { id, account, holder } },
    secret,
    jwtConfig,
  );

  return { tokenNewCustomer };
};

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

const updateCustomer = async (id, dataCustomer) => {
  const { holder, password } = dataCustomer;

  const updateCustomer = await Customer.update(
    { holder, password },
    { where: { id: id } },
  );

  return updateCustomer;
};

const deleteCustomer = async (id) =>  Customer.destroy({ where: { id: id } });

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
};