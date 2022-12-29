const { Model, DataTypes } = require('sequelize');

class School extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING
        // symbol: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'School'
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Classroom, {
      as: 'classrooms'
    });
  }
}

module.exports = School;
