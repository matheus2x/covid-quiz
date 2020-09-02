const { Model, DataTypes } = require("sequelize");

class Quiz extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        score: DataTypes.INTEGER,
        duration: DataTypes.STRING,
        difficulty: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Quest, {
      foreignKey: "quiz_id",
      through: "quiz_quests",
      as: "quests",
    });
  }
}

module.exports = Quiz;
