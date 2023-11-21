"use strict";

module.exports = function (app) {
  var Roles = app.db.models.Roles;
  app.route("/roles").get(function (req, res) {
    Roles.findAll().then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }).post(function (req, res) {
    console.log(req.body);
    Roles.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error);
    });
  });
  app.route("/roles/:role_id").get(function (req, res) {
    Roles.findOne({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Roles.update(req.body, {
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
    Roles.destroy({
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