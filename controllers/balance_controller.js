const balance_services = require('../services');
const { StatusCodes } = require('http-status-codes');

const updateBalance = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { balance } = req.body;

    await balance_services.updateBalance(id, balance)

    return res.status(StatusCodes.ACCEPTED).send({ message: `Total balance: ${ balance }` })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  updateBalance,
};