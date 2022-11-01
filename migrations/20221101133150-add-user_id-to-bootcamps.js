'use strict';

const { QueryError, QueryInterface } = require('sequelize');
const sequelize = require('../config/seq');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Bootcamps',
                                'user_id',
                                {
                                    type: Sequelize.INTEGER,
                                  references:{
                                      model:'users',
                                    key:'id'
                                  },
                                    onUpdate: 'CASCADE',
                                    onDelete:'SET NULL'
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bootcamps' , 
                                    'user_id'
                                    )
  }
};
