const customer_services = require('../../services');
const { StatusCodes } = require('http-status-codes');

const readOneCustomer = async (req, res, next) => {
  try {
    const { id } =req.params;

    const oneCustomer = await customer_services.readOneCustomer(id);

    return res.status(StatusCodes.OK).json(oneCustomer);
  } catch (error) {
    next(error);
  };
};

module.exports = { readOneCustomer };
