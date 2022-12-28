// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class School extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       School.hasMany(models.Classroom, {
//         as: 'classroomId'
//       });
//     }
//   }
//   School.init(
//     {
//       name: DataTypes.STRING,
//       city: DataTypes.STRING,
//       state: DataTypes.STRING
//     },
//     {
//       sequelize,
//       modelName: 'School'
//     }
//   );
//   return School;
// };

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
    School.hasMany(models.Classroom, {
      as: 'classroomId'
    });
  }
}

module.exports = School;

/*
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  });

  School.associate = function (models) {
    School.hasMany(models.Classroom, {
      as: 'classroomId'
    });
  };
  return School;
};
*/
