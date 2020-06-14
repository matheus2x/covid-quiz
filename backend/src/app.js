const express = require("express");
const { resolve } = require("path");
// const cors = require('cors');

const routes = require("./routes");

const app = express();

// app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(resolve(__dirname, "..", "uploads")));

module.exports = app;
