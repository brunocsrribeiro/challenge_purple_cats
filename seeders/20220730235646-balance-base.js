'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Balances', [{
      balance: 200,
    }], {});
      },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Balances', null, {});
  }
};
