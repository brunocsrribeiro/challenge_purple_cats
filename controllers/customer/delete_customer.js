const customer_services = require('../../services');
const { StatusCodes } = require('http-status-codes');

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;

    await customer_services.deleteCustomer(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  };
};

module.exports = { deleteCustomer };
