const balance_services = require('../services');
const { StatusCodes } = require('http-status-codes');

const updateBalance = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;
    const { query } = req.query;

    await balance_services.updateBalance(id, balance, query);

    return res.status(StatusCodes.ACCEPTED).send({ message: 'Successfully completed'});
  } catch (error) {
    next(error);
  };
};

module.exports = { updateBalance };
