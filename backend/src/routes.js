const express = require("express");

const CountryController = require("./controllers/CountryController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/countries", CountryController.index);

module.exports = routes;
