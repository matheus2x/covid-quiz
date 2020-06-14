const { Model, DataTypes } = require("sequelize");

class Tip extends Model {
  static init(connection) {
    super.init(
      {
        image: DataTypes.STRING,
        text: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Tip;
