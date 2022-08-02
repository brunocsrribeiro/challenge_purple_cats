const { Customer, Balance } = require('../models');
require('dotenv/config');

const updateBalance = async (id, balance) => {
  const updateBalance = await Balance.update(
    { balance },
    { where: { id: id } },
  );

  return updateBalance;
};

module.exports = { updateBalance };