const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Country = require("../models/Country");
const State = require("../models/State");
const User = require("../models/User");

const Tip = require("../models/Tip");

const connection = new Sequelize(dbConfig);

Country.init(connection);
State.init(connection);
User.init(connection);

Tip.init(connection);

Country.associate(connection.models);
State.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
