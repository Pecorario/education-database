'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('teachersClassrooms', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teachers',
          key: 'id'
        }
      },
      classroomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // WorkingDays hasMany Users n:n
          model: 'classrooms',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('teachersClassrooms');
  }
};
