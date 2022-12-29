const Classroom = require('../model/Classroom');
const TeacherClassroom = require('../model/TeacherClassroom');

module.exports = {
  async index(req, res) {
    const classroom = await Classroom.findAll({
      include: [
        {
          model: TeacherClassroom,
          as: 'teachers'
          // attributes: ['classroomId'],
          // through: {
          //   attributes: []
          // }
        }
      ]
    });
    return res.json(classroom);
  },

  async findById(req, res) {
    const { id } = req.params;
    const classroom = await Classroom.findAll({
      where: {
        id: id
      }
    });
    return res.json(classroom);
  },

  async create(req, res) {
    const { name, deskCapacity, isBlocked, schoolId, teachers } = req.body;
    const classroom = await Classroom.create({
      name,
      deskCapacity,
      isBlocked,
      schoolId
    });

    teachers.map(async teacher => {
      await TeacherClassroom.create({
        teacherId: teacher,
        classroomId: classroom.dataValues.id
      });
    });

    return res.status(201).send({ id: classroom.dataValues.id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const classroom = await Classroom.destroy({
      where: {
        id: id
      }
    });
    return res.json(classroom);
  },

  async update(req, res) {
    const { id, name, deskCapacity, isBlocked, schoolId, teachers } = req.body;
    const classroom = await Classroom.update(
      {
        name,
        deskCapacity,
        isBlocked,
        schoolId
      },
      {
        where: {
          id: id
        }
      }
    );
    return res.json(classroom);
  }
};
