const balance_services = require('../services');
const { StatusCodes } = require('http-status-codes');

const createNewBalance = async (req, res, next) => {
  try {
    const { balance, customerId } = req.body;

    const newBalance = await balance_services.createNewBalance({
      balance,
      customerId,
    });

    return res.status(StatusCodes.CREATED).json(newBalance);
  } catch (error) {
    next(error);
  }
};

const readBalance = async (_req, res, next) => {
  try {
    const allBalances = await balance_services.readBalance();

    return res.status(StatusCodes.OK).json(allBalances);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewBalance,
  readBalance,
};