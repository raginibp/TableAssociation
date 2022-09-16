'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [{
      cartName: 'Cart1',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        cartName: 'Cart2',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {


     await queryInterface.bulkDelete('Carts', null, {});

  }
};
