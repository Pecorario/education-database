// 'use strict';

// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Classroom extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       Classroom.belongsTo(models.School, {
//         foreingkey: 'schoolId',
//         as: 'school'
//       });
//     }
//   }
//   Classroom.init(
//     {
//       name: DataTypes.STRING,
//       deskCapacity: DataTypes.INTEGER,
//       isBlocked: DataTypes.BOOLEAN,
//       schoolId: DataTypes.INTEGER
//     },
//     {
//       sequelize,
//       modelName: 'Classroom'
//     }
//   );
//   return Classroom;
// };

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
    Classroom.belongsTo(models.School, {
      foreingkey: 'schoolId',
      as: 'school'
    });
    Classroom.belongsToMany(models.Teacher, {
      through: 'teachersClassrooms',
      foreignKey: 'classroomId',
      as: 'teachers'
    });
  }
}

module.exports = Classroom;

/*
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING,
    deskCapacity: DataTypes.INTEGER,
    isBlocked: DataTypes.BOOLEAN,
    schoolId: DataTypes.INTEGER
  });

  Classroom.associate = function (models) {
    Classroom.belongsTo(models.School, {
      foreingkey: 'schoolId',
      as: 'school'
    });
  };

  return Classroom;
};
*/
