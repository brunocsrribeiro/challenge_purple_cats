const { isCustomerIdValid } = require('../controllers/middlewares/validations');
const { Balance } = require('../models');
require('dotenv/config');

const updateBalance = async (id, balance, query) => {
  const currentBalance = [];

  if (isCustomerIdValid) {
    const findCurrentBalance = await Balance.findOne({
      where: { customerId: id }
    });

    currentBalance.push(Number(findCurrentBalance.dataValues.balance));
  };

  switch (query) {
    case 'deposit':
      await Balance.update(
        { balance: currentBalance[0] += balance },
        { where: { customerId: id } },
      );
      break;
    case 'withdraw':
      await Balance.update(
        { balance: currentBalance[0] -= balance },
        { where: { customerId: id } },
      );
      break;
  }
};

module.exports = { updateBalance };
