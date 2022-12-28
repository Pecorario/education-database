const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const School = require('../model/School');
const Classroom = require('../model/Classroom');
const Teacher = require('../model/Teacher');
const TeacherClassroom = require('../model/TeacherClassroom');

const connection = new Sequelize(dbConfig);

User.init(connection);
School.init(connection);
Classroom.init(connection);
Teacher.init(connection);
TeacherClassroom.init(connection);

module.exports = connection;
