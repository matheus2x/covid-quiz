"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("quiz_quests", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "quizzes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "quests", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("quiz_quests");
  },
};
