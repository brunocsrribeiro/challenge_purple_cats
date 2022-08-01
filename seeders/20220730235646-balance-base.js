'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Balances', [
      {
        balance: 200,
        customer_id: 1,
      },
      {
        balance: 400,
        customer_id: 2,
      }
    ], {});
      },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Balances', null, {});
  }
};
