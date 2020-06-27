"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("quests", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      wrongAnswer: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      wrongAnswer2: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      wrongAnswer3: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      rightAnswer: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("quests");
  },
};
