const { Model, DataTypes } = require('sequelize');

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        deskCapacity: DataTypes.INTEGER,
        isBlocked: DataTypes.BOOLEAN,
        teachersList: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Classroom;
