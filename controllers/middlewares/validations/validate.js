const { Customer, Balance } = require('../../../models');
const { StatusCodes } = require('http-status-codes');

const idIsValid = async (req, res, next) => {
  const { id } = req.params;

  const idBalanceIsValid = await Balance.findByPk(id);
  
  if (!idBalanceIsValid) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: 'Id not found' });
  };
  
  const idCustomerIsValid = await Customer.findByPk(id);
  
  if (!idCustomerIsValid) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: 'Id not found' });
  };

  next();
};

module.exports = {
  idIsValid
}
