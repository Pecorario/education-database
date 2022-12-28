const { Model, DataTypes } = require('sequelize');

class TeacherClassroom extends Model {
  static init(sequelize) {
    super.init(
      {
        teacherId: DataTypes.INTEGER,
        classroomId: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'TeacherClassroom'
      }
    );
  }
  static associate(models) {
    TeacherClassroom.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    TeacherClassroom.belongsTo(models.Classroom, { foreignKey: 'classroomId' });
  }
}

module.exports = TeacherClassroom;
