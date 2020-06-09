const express = require("express");

const CountryController = require("./controllers/CountryController");
const StateController = require("./controllers/StateController");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/countries", CountryController.index);
routes.get("/countries/:country_id/states", StateController.index);

routes.get("/states/:state_id", StateController.show);

routes.post("/states/:state_id/users", UserController.store);
routes.get("/states/:state_id/users", UserController.index);

module.exports = routes;
