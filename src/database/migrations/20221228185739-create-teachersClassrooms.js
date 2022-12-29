'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('teacher_classrooms', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teachers',
          key: 'id'
        }
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'classrooms',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('teacher_classrooms');
  }
};
