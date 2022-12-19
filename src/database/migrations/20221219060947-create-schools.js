'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('schools', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // symbol: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // } vai ser outra tabela
    });
  },

  async down(queryInterface, Sequelize) {}
};
