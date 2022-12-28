const Teacher = require('../model/Teacher');

module.exports = {
  async index(req, res) {
    const teacher = await Teacher.findAll();
    return res.json(teacher);
  },

  async findById(req, res) {
    const { id } = req.params;
    const teacher = await Teacher.findAll({
      where: {
        id: id
      }
    });
    return res.json(teacher);
  },

  async create(req, res) {
    const { name } = req.body;
    const teacher = await Teacher.create({
      name
    });
    return res.json(teacher);
  },

  async delete(req, res) {
    const { id } = req.params;
    const teacher = await Teacher.destroy({
      where: {
        id: id
      }
    });
    return res.json(teacher);
  },

  async update(req, res) {
    const { id, name, deskCapacity, isBlocked, schoolId } = req.body;
    const teacher = await Teacher.update(
      {
        name
      },
      {
        where: {
          id: id
        }
      }
    );
    return res.json(teacher);
  }
};
