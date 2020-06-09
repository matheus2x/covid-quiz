const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Country = require("../models/Country");
const State = require("../models/State");

const connection = new Sequelize(dbConfig);

Country.init(connection);
State.init(connection);

State.associate(connection.models);

module.exports = connection;
