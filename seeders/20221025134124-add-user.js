'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
       email: 'ArrozconPollo@gmail.con',
       password: '321'
      }, 
      {
        name: 'Daniel',
        email: 'Danielue@gmail.con',
        password: '84685'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
     
  }
};
