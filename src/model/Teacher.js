const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize,
        modelName: 'Teacher'
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Classroom, {
      through: 'teacher_classrooms',
      foreignKey: 'teacher_d',
      as: 'classrooms'
    });
  }
}

module.exports = Teacher;
