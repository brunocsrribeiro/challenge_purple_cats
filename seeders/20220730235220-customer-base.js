'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [{
      account: 467913,
      holder: 'Janis Johns',
      password: 123456,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
