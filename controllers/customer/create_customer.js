const customer_services = require('../../services');
const { StatusCodes } = require('http-status-codes');

const createNewCustomer = async (req, res, next) => {
  try {
    const { account, holder, password, balance, customerId } = req.body;

    const newCustomer = await customer_services.createNewCustomer({
      account,
      holder,
      password,
      balance,
      customerId,
    });

    return res.status(StatusCodes.CREATED).json(newCustomer);
  } catch (error) {
    next(error);
  };
};

module.exports = { createNewCustomer };
