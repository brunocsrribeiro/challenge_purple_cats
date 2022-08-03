const { Customer, Balance } = require('../../models');
require('dotenv/config');

const createNewCustomer = async (dataNewCustomer) => {  
  const { account, holder, password, balance } = dataNewCustomer;

  const { id } = await Customer.create(
    { account, holder, password }, 
    { attributes: { exclude: ['password'] } },
  );   

  await Balance.create({ balance, customerId: id });

  return { account, holder, password, balance };
};

module.exports = { createNewCustomer };
