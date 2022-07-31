const customer_services = require('../services');
const { StatusCodes } = require('http-status-codes');

const read = async (_req, res, next) => {
  try {
    const costumers = await customer_services.read();

    return res.status(StatusCodes.OK).json(costumers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  read,
}