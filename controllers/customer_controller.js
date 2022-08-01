const customer_services = require('../services');
const { StatusCodes } = require('http-status-codes');

// const create = async (req, res, next) => {
//   try {
//     const { account, holder, password } = req.body;

//     const newCustomer = await customer_services.create({
//       account,
//       holder,
//       password,
//     });

//     return res.status(StatusCodes.CREATED).json(newCustomer);
//   } catch (error) {
//     next(error);
//   }
// }

const read = async (_req, res, next) => {
  try {
    const costumers = await customer_services.read();

    return res.status(StatusCodes.OK).json(costumers);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  // create,
  read,
}