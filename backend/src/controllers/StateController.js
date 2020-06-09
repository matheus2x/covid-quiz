const State = require("../models/State");
const Country = require("../models/Country");

const iso_3166 = require("iso-3166-2");

// const countriesData = require("./genCountriesData");

module.exports = {
  async index(req, res) {
    const { country_id } = req.params;

    const country = await Country.findByPk(country_id);

    if (!country) {
      console.log(country_id);
      return res.status(400).json({ error: "Country not found." });
    }

    const states = await State.findAll({
      attributes: ["iso_subid", "name", "type"],
      where: {
        country_id,
      },
    });

    return res.json(states);
  },

  async show(req, res) {
    const { state_id } = req.params;

    const state = await State.findByPk(state_id);

    if (!state) {
      return res.status(400).json({ error: "State not found." });
    }

    const pasterializedState = {
      name: state.name,
      iso_subid: state.iso_subid,
      type: state.type,
    };

    return res.json(pasterializedState);
  },
};
