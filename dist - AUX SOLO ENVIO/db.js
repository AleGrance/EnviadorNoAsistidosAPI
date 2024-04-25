"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = require("./libs/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Datos de la conexion PG
var db = null;

module.exports = function (app) {
  if (!db) {
    var sequelize = new _sequelize["default"](_config.postgres.database, _config.postgres.username, _config.postgres.password, _config.postgres.params);
    db = {
      sequelize: sequelize,
      Sequelize: _sequelize["default"],
      models: {}
    };

    var dir = _path["default"].join(__dirname, "/models"); // Lee el directorio y reorre cada archivo del mismo directorio o sea dir


    _fs["default"].readdirSync(dir).forEach(function (filename) {
      var modelDir = _path["default"].join(dir, filename);

      var model = require(modelDir)(sequelize, _sequelize["default"].DataTypes);

      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach(function (key) {
      if (db.models[key].hasOwnProperty("associate")) {
        db.models[key].associate(db.models);
      }
    });
  }

  return db;
};