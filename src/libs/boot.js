let hoyAhora = new Date();
let horaAhora = hoyAhora.getHours() + ':' + hoyAhora.getMinutes();
module.exports = (app) => {
  //metodo sync que crea las tablas
  app.db.sequelize.sync().then(() => {
    app.listen(app.get("port"), () => {
      console.log("Server on port", app.get("port"));
      console.log("Enviador de turnos no asistidos iniciado a las:", horaAhora);
    });
  });
};
