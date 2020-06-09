const State = require("../models/State");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { state_id } = req.params;

    const state = await State.findByPk(state_id, {
      include: { association: "users" },
    });

    const pasterializedState = {
      country_id: state.country_id,
      name: state.name,
      iso_subid: state.iso_subid,
      type: state.type,
      users: state.users,
    };

    return res.json(pasterializedState);
  },

  async store(req, res) {
    const { state_id } = req.params;
    const { name, username, password } = req.body;

    const state = await State.findByPk(state_id);

    if (!state) {
      return res.status(400).json({ error: "State not found." });
    }

    const user = await User.create({
      name,
      username,
      password,
      state_id,
    });

    return res.json(user);
  },
};
