'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('classrooms', {
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
      desk_capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      teachers_list: {
        type: Sequelize.STRING
      }
      // schedule: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // } grade de aulas, vai ser uma imagem em base64
      // vai faltar o protocolo que é um arquivo tipo docx
    });
  },

  async down(queryInterface, Sequelize) {}
};
