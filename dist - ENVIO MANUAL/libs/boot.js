"use strict";

var hoyAhora = new Date();
var diaHoy = hoyAhora.toString().slice(0, 3);
var fullHoraAhora = hoyAhora.toString().slice(16, 21);

module.exports = function (app) {
  //metodo sync que crea las tablas
  app.db.sequelize.sync().then(function () {
    app.listen(app.get("port"), function () {
      console.log("Server on port", app.get("port"));
      console.log("Enviador de turnos no asistidos iniciado a las:", fullHoraAhora);
    });
  });
};