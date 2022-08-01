const { Customer, Balance } = require('../models');

const read = async () => {
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
  console.log(allCustomers);

  return allCustomers;
};

module.exports = {
  read,
};