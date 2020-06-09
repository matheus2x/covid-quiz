const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Country = require("../models/Country");
const State = require("../models/State");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

Country.init(connection);
State.init(connection);
User.init(connection);

State.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
