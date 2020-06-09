const { Model, DataTypes } = require("sequelize");

class Country extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        iso_alpha2: DataTypes.STRING,
        iso_alpha3: DataTypes.STRING,
        iso_numeric: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.State, { foreignKey: "country_id", as: "states" });
  }
}

module.exports = Country;
