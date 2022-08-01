const customer_services = require('../services');
const { StatusCodes } = require('http-status-codes');

const createNewCustomer = async (req, res, next) => {
  try {
    const { account, holder, password } = req.body;

    const newCustomer = await customer_services.createNewCustomer({
      account,
      holder,
      password,
    });

    return res.status(StatusCodes.CREATED).json(newCustomer);
  } catch (error) {
    next(error);
  }
}

const readCustomer = async (_req, res, next) => {
  try {
    const allCostumers = await customer_services.readCustomer();

    return res.status(StatusCodes.OK).json(allCostumers);
  } catch (error) {
    next(error);
  }
};

// const readOneCustomer = async (req, res, next) => {};

// const updateCustomer = async (req, res, next) => {
//   try {
//     //
//   } catch (error) {
//     next(error);
//   }
// };

// const deleteCustomer = async (req, res, next) => {};

module.exports = {
  createNewCustomer,
  readCustomer,
  // readOneCustomer,
  // updateCustomer,
  // deleteCustomer,
};
