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
}

module.exports = Country;
