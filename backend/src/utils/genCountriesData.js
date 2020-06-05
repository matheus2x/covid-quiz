const iso31661 = require("iso-3166-1");
const iso31662 = require("iso-3166-2");

const countriesCode = iso31662.codes;

const countriesData = [];

const countriesConvertedToArray = Object.entries(countriesCode);

for (let i = 0; i < 249; i++) {
  countriesData.push({
    name: iso31661.whereAlpha2(countriesConvertedToArray[i][1]).country,
    iso_alpha2: countriesConvertedToArray[i][1],
    iso_alpha3: countriesConvertedToArray[i][0],
    iso_numeric: iso31661.whereAlpha2(countriesConvertedToArray[i][1]).numeric,
    created_at: new Date(),
    updated_at: new Date(),
  });
}

module.exports = countriesData;
