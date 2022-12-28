'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('teachers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('teachers');
  }
};
