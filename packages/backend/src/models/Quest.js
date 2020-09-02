const { Model, DataTypes } = require("sequelize");

class Quest extends Model {
  static init(connection) {
    super.init(
      {
        question: DataTypes.STRING,
        wrongAnswer: DataTypes.STRING,
        wrongAnswer2: DataTypes.STRING,
        wrongAnswer3: DataTypes.STRING,
        rightAnswer: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Quiz, {
      foreignKey: "quest_id",
      through: "quiz_quests",
      as: "quizzes",
    });
  }
}

module.exports = Quest;
