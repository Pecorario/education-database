const express = require('express');
const UserController = require('./controller/UserController');
const SchoolController = require('./controller/SchoolController');
const ClassroomController = require('./controller/ClassroomController');
const TeacherController = require('./controller/TeacherController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Olá mundo');
});

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.findById);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);
routes.put('/users', UserController.update);

routes.get('/schools', SchoolController.index);
routes.get('/schools/:id', SchoolController.findById);
routes.post('/schools', SchoolController.create);
routes.delete('/schools/:id', SchoolController.delete);
routes.put('/schools', SchoolController.update);

routes.get('/classrooms', ClassroomController.index);
routes.get('/classrooms/:id', ClassroomController.findById);
routes.post('/classrooms', ClassroomController.create);
routes.delete('/classrooms/:id', ClassroomController.delete);
routes.put('/classrooms', ClassroomController.update);

routes.get('/teachers', TeacherController.index);
routes.get('/teachers/:id', TeacherController.findById);
routes.post('/teachers', TeacherController.create);
routes.delete('/teachers/:id', TeacherController.delete);
routes.put('/teachers', TeacherController.update);

module.exports = routes;
