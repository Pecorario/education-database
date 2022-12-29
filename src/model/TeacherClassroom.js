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
    this.belongsTo(models.Teacher, {
      targetKey: 'id',
      foreignKey: 'teacher_id'
    });
    this.belongsTo(models.Classroom, {
      targetKey: 'id',
      foreignKey: 'classroom_id'
    });
  }
}

module.exports = TeacherClassroom;
