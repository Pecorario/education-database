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
      school_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schools',
          key: 'id'
        }
      }
      // teachers_list: {
      //  type: Sequelize.//STRING
      //} MUITOS PRA MUITOS
      // schedule: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // } grade de aulas, vai ser uma imagem em base64
      // vai faltar o protocolo que é um arquivo tipo docx
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('classrooms');
  }
};
