const { StatusCodes } = require('http-status-codes');
const JWT = require('jsonwebtoken');
const { Customer } = require('../../../models');
require('dotenv/config');

const secret = process.env.SECRET;

const decode = (token) => {
  try {
    const decoded = JWT.verify(token, secret);

    return decoded;
  } catch (error) {
    console.error(error.message);
  }
};

const validTokenToAccess = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Token not found' });
    }

    const decoded = decode(token);

    const { dataValues } = await Customer.findOne({ where: { holder: decoded.data.holder } });

    req.customer = dataValues;

    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send({
      message: 'Expired or invalid token',
    });
  }
}

module.exports = { decode, validTokenToAccess };
