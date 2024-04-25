"use strict";

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importar para leer los valores de entorno
require('dotenv').config();

var app = (0, _express["default"])(); //cross access

var allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

app.use(allowCrossDomain);
(0, _consign["default"])({
  cwd: __dirname
}).include("libs/config.js").then("db.js").then("libs/middlewares.js").then("routes").then("libs/boot.js").into(app);