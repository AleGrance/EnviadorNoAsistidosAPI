"use strict";

module.exports = function (app) {
  var htmlBody = "\n    <div style=\"text-align: center;\">\n    <h1>ERROR 404</h1>\n    <br>\n    <img src=\"http://i.stack.imgur.com/SBv4T.gif\" alt=\"I choose you!\"  width=\"250\" />\n    <br>\n    <h1>Page not found</h1>\n    </div>\n    ";
  app.get("/", function (req, res) {
    res.status(404).send(htmlBody); //res.json({message: "ODONTOS - Metrepay - EndPoint API"})
  });
  app.route("/api").get(function (req, res) {
    res.status(404).send(htmlBody); //res.json({message: "ODONTOS - Metrepay - EndPoint API"})
  });
};