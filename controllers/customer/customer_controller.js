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

const readCustomer = async (_req, res, next) => {
  try {
    const allCostumers = await customer_services.readCustomer();

    return res.status(StatusCodes.OK).json(allCostumers);
  } catch (error) {
    next(error);
  };
};

const readOneCustomer = async (req, res, next) => {
  try {
    const { id } =req.params;

    const oneCustomer = await customer_services.readOneCustomer(id);

    return res.status(StatusCodes.OK).json(oneCustomer);
  } catch (error) {
    next(error);
  };
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { holder, password } = req.body;

    await customer_services.updateCustomer(id, { holder, password });

    return res.status(StatusCodes.OK).send({ message: 'Successfully updated!' });
  } catch (error) {
    next(error);
  };
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;

    await customer_services.deleteCustomer(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  };
};

module.exports = {
  createNewCustomer,
  readCustomer,
  readOneCustomer,
  updateCustomer,
  deleteCustomer,
};
