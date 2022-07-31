const { Customer } = require('../models');

const read = async () => Customer.findAll();

module.exports = {
  read,
};