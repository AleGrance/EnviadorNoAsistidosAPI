"use strict";

var CryptoJS = require("crypto-js");

module.exports = function (app) {
  var Users = app.db.models.Users;
  app.route("/users").get(function (req, res) {
    Users.findAll().then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }).post(function (req, res) {
    console.log(req.body); // Receiving data

    var _req$body = req.body,
        user_name = _req$body.user_name,
        user_password = _req$body.user_password,
        user_email = _req$body.user_email,
        user_fullname = _req$body.user_fullname,
        role_id = _req$body.role_id;

    if (user_password === "") {
      res.json({
        error: 'La contraseña no puede estar vacia!'
      });
      return;
    } // Creating new user


    var user = {
      user_name: user_name,
      user_password: user_password,
      user_email: user_email,
      user_fullname: user_fullname,
      role_id: role_id
    }; // Encrypting password

    user.user_password = CryptoJS.AES.encrypt(user.user_password, "secret").toString(); // Insert new user

    Users.create(user).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error);
    });
  });
  app.route("/users/:user_id").get(function (req, res) {
    Users.findOne({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Users.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    //const id = req.params.id;
    Users.destroy({
      where: req.params
    }).then(function () {
      return res.json(req.params);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};