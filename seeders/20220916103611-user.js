'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [{
       firstName: 'John',
       lastName: 'Doe',
       email: 'demo@demo.com',
       password: '$321!pass!123$',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       firstName: 'Jenny',
       lastName: 'Doe',
        email: 'demo@demo.com',
        password: '$321!pass!123$',
        createdAt: new Date(),
        updatedAt: new Date()
     },
       {
         firstName: 'Jack',
         lastName: 'Doe',
         email: 'demo@demo.com',
         password: '$321!pass!123$',
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
     },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});

  }
};
