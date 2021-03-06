const express = require("express");

const CountryController = require("./controllers/CountryController");
const StateController = require("./controllers/StateController");
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");

const TipController = require("./controllers/TipController");

const routes = express.Router();

routes.get("/countries", CountryController.index);
routes.get("/countries/:country_id/states", StateController.index);

routes.get("/states/:state_id", StateController.show);

routes.post("/sessions", LoginController.store);

routes.post("/states/:state_id/users", UserController.store);
routes.get("/states/:state_id/users", UserController.index);

routes.get("/tips", TipController.index);

module.exports = routes;
