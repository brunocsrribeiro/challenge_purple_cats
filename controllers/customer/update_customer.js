const customer_services = require('../../services');
const { StatusCodes } = require('http-status-codes');

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

module.exports = { updateCustomer };
