import Sequelize from "sequelize";
import fs from "fs";
import path from "path";

// Datos de la conexion PG
import { postgres } from "./libs/config";

let db = null;

module.exports = (app) => {
  if (!db) {
    const sequelize = new Sequelize(
      postgres.database,
      postgres.username,
      postgres.password,
      postgres.params
    );

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    const dir = path.join(__dirname, "/models");
    // Lee el directorio y reorre cada archivo del mismo directorio o sea dir
    fs.readdirSync(dir).forEach((filename) => {
      const modelDir = path.join(dir, filename);
      const model = require(modelDir)(sequelize, Sequelize.DataTypes);
      db.models[model.name] = model;
    });

    Object.keys(db.models).forEach((key) => {
      if (db.models[key].hasOwnProperty("associate")) {
        db.models[key].associate(db.models);
      }
    });
  }

  return db;
};
