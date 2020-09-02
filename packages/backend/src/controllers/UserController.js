const Yup = require("yup");

const Country = require("../models/Country");
const State = require("../models/State");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { state_id } = req.params;

    const state = await State.findByPk(state_id, {
      include: { association: "users" },
    });

    const country = await Country.findByPk(state.country_id, {
      attributes: ["name"],
    });

    const pasterializedState = {
      country,
      country_id: state.country_id,
      state: state.name,
      iso_subid: state.iso_subid,
      type: state.type,
      users: state.users,
    };

    return res.json(pasterializedState);
  },

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { state_id } = req.params;
    const { name, username, password } = req.body;

    const state = await State.findByPk(state_id);

    if (!state) {
      return res.status(400).json({ error: "State not found." });
    }

    const userExists = await User.findOne({ where: { username: username } });

    if (userExists) {
      return res.status(400).json({ error: "username already registered." });
    }

    const user = await User.create({
      name,
      username,
      password,
      state_id,
    });

    return res.json({
      your_name: user.name,
      your_username: user.username,
      your_password: user.password,
      your_state_id: user.state_id,
    });
  },
};
