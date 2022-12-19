const School = require('../model/School');

module.exports = {
  async index(req, res) {
    const school = await School.findAll();
    return res.json(school);
  },

  async findById(req, res) {
    const { id } = req.params;
    const school = await School.findAll({
      where: {
        id: id
      }
    });
    return res.json(school);
  },

  async create(req, res) {
    const { name, city, state } = req.body;
    const school = await School.create({
      name,
      city,
      state
    });
    return res.json(school);
  },

  async delete(req, res) {
    const { id } = req.params;
    const school = await School.destroy({
      where: {
        id: id
      }
    });
    return res.json(school);
  },

  async update(req, res) {
    const { id, name, city, state } = req.body;
    const school = await School.update(
      {
        name,
        city,
        state
      },
      {
        where: {
          id: id
        }
      }
    );
    return res.json(school);
  }
};
