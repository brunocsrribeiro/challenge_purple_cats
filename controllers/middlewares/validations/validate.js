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

const isCustomerIdValid = async (req, res, next) => {
  const { id } = req.params;

  const isCustomerIdValid = await Balance.findOne({
    where: { customerId: id },
  });
  
  if (!isCustomerIdValid) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Request denied' });
  };

  next();
};

const isPositiveBalance = async (req, res, next) => {
  const { id } = req.params;
  const { query } = req.query;
  const { balance } = req.body;

  const currentBalance = [];

  if (isCustomerIdValid) {
    const findCurrentBalance = await Balance.findOne({
      where: { customerId: id }
    });

    currentBalance.push(Number(findCurrentBalance.dataValues.balance));
  };

  if (query !== 'withdraw' && query !== 'deposit') {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Unable to complete your request!'});
  };

  if (balance > currentBalance[0] && query === 'withdraw') {
    return res.status(StatusCodes.FORBIDDEN).send({ message: 'Sorry! Insufficient funds.'})
  }

  next();
};


module.exports = {
  idIsValid,
  isCustomerIdValid,
  isPositiveBalance,
};
