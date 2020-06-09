const getStatesData = require("../../utils/genStatesData");

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const statesData = await getStatesData;
    return queryInterface.bulkInsert("states", statesData, {});
  },

  // up: async (queryInterface, Sequelize) => {
  //   return await queryInterface.bulkInsert("states", statesData, {});
  // },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("states", null, {});
  },
};
