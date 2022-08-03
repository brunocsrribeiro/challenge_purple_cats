const { Customer } = require('../../models');
require('dotenv/config');

const updateCustomer = async (id, dataCustomer) => {
  const { holder, password } = dataCustomer;

  const updateCustomer = await Customer.update(
    { holder, password },
    { where: { id: id } },
  );

  return updateCustomer;
};

module.exports = { updateCustomer };
