const { Model, DataTypes } = require('sequelize');

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        deskCapacity: DataTypes.INTEGER,
        isBlocked: DataTypes.BOOLEAN,
        schoolId: DataTypes.INTEGER
      },
      {
        sequelize,
        modelName: 'Classroom'
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.School, {
      foreingkey: 'school_id',
      as: 'school'
    });
    this.belongsToMany(models.Teacher, {
      through: 'teacher_classrooms',
      foreignKey: 'classroom_id',
      as: 'teachers'
    });
  }
}

module.exports = Classroom;
