const { Customer } = require('../../models');
require('dotenv/config');

const deleteCustomer = async (id) =>  Customer.destroy({ where: { id: id } });

module.exports = { deleteCustomer };
