const User = require('../model/User');

module.exports = {
  async index(req, res) {
    const user = await User.findAll();
    return res.json(user);
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await User.findAll({
      where: {
        id: id
      }
    });
    return res.json(user);
  },

  async create(req, res) {
    const { name, password } = req.body;
    const user = await User.create({
      name,
      password
    });
    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id: id
      }
    });
    return res.json(user);
  },

  async update(req, res) {
    const { id, name, password } = req.body;
    const user = await User.update(
      {
        name,
        password
      },
      {
        where: {
          id: id
        }
      }
    );
    return res.json(user);
  }
};
