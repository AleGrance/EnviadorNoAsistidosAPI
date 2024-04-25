"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postgres = exports.firebird = void 0;
var postgres = {
  // PostgreSQL
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PWD,
  params: {
    dialect: "postgres",
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
  }
};
exports.postgres = postgres;
var firebird = {
  // Firebird
  host: process.env.FDB_HOST,
  port: process.env.FDB_PORT,
  database: process.env.FDB_DB,
  user: process.env.FDB_USER,
  password: process.env.FDB_PWD,
  lowercase_keys: false,
  // set to true to lowercase keys
  role: null,
  // default
  retryConnectionInterval: 1000,
  // reconnect interval in case of connection drop
  blobAsText: false
};
exports.firebird = firebird;