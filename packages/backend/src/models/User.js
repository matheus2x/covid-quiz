const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.State, { foreignKey: "state_id", as: "state" });
  }

  checkPassword(password) {
    if (password === this.password) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = User;
