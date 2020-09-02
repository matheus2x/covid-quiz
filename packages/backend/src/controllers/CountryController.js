const Country = require("../models/Country");

module.exports = {
  async index(req, res) {
    const countries = await Country.findAll({
      attributes: ["id", "name", "iso_alpha2", "iso_alpha3", "iso_numeric"],
    });
    return res.json(countries);
  },
};
