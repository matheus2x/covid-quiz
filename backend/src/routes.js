const express = require("express");

const CountryController = require("./controllers/CountryController");
const StateController = require("./controllers/StateController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/countries", CountryController.index);
routes.get("/countries/:country_id/states", StateController.index);

module.exports = routes;
