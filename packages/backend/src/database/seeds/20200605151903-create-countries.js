const countriesData = require("../../utils/genCountriesData");

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", countriesData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("countries", null, {});
  },
};
