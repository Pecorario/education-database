const Classroom = require('../model/Classroom');

module.exports = {
  async index(req, res) {
    const classroom = await Classroom.findAll();
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
    const { name, deskCapacity, isBlocked, teachersList } = req.body;
    const classroom = await Classroom.create({
      name,
      deskCapacity,
      isBlocked,
      teachersList
    });
    return res.json(classroom);
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
    const { id, name, deskCapacity, isBlocked, teachersList } = req.body;
    const classroom = await Classroom.update(
      {
        name,
        deskCapacity,
        isBlocked,
        teachersList
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