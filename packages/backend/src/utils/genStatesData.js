require("../database/connection");

const iso_3166 = require("iso-3166-2");

const countriesData = require("./genCountriesData");
const Country = require("../models/Country");

const all_iso_alpha2 = [];
Object.keys(countriesData).forEach(function (key) {
  all_iso_alpha2.push(countriesData[key].iso_alpha2);
});
const statesData = [];

const statesPromise = new Promise(async (resolve, reject) => {
  for (const one_iso of all_iso_alpha2) {
    const getCountry_id = await Country.findAll({
      attributes: ["id"],
      where: {
        iso_alpha2: one_iso,
      },
    });

    const daiso = iso_3166.country(one_iso);

    const convertedStates = Object.entries(daiso.sub);

    for (let i = 0; i < convertedStates.length; i++) {
      statesData.push({
        country_id: await getCountry_id[0].dataValues.id,
        name: convertedStates[i][1].name,
        iso_subid: convertedStates[i][0],
        type: convertedStates[i][1].type,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }
  resolve(statesData);
});

module.exports = statesPromise;
