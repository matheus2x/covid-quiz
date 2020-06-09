const { Model, DataTypes } = require("sequelize");

class State extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        iso_subid: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Country, { foreignKey: "country_id", as: "country" });
  }
}

module.exports = State;
