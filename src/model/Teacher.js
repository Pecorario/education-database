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
    Teacher.belongsToMany(models.Classroom, {
      through: 'teachersClassrooms',
      foreignKey: 'teacherId',
      as: 'classrooms'
    });
  }
}

module.exports = Teacher;
