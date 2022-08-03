const customer_services = require('../../services');
const { StatusCodes } = require('http-status-codes');

const readCustomer = async (_req, res, next) => {
  try {
    const allCostumers = await customer_services.readCustomer();

    return res.status(StatusCodes.OK).json(allCostumers);
  } catch (error) {
    next(error);
  };
};

module.exports = { readCustomer };
