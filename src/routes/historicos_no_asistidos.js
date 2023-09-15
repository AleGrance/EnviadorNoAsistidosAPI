const cron = require("node-cron");
const { Op } = require("sequelize");

module.exports = (app) => {
  const Historicos_no_asistidos = app.db.models.Historicos_no_asistidos;
  const Turnos_no_asistidos = app.db.models.Turnos_no_asistidos;

  let historicoObj = {
    fecha: "",
    cant_enviados: 0,
    cant_no_enviados: 0,
    user_id: 1,
  };

  // Ejecutar la funcion a las 08:30 de Martes(2) a Sabados (6)
  cron.schedule("00 12 * * 2-6", () => {
    let hoyAhora = new Date();
    let diaHoy = hoyAhora.toString().slice(0, 3);
    let fullHoraAhora = hoyAhora.toString().slice(16, 21);

    console.log("Hoy es:", diaHoy, "la hora es:", fullHoraAhora);
    console.log("CRON: Se almacena el historico de los enviados hoy - No Asistidos");
    cantidadEnviados();
  });

  async function cantidadEnviados() {
    // Fecha de hoy 2022-02-30
    let fechaHoy = new Date().toISOString().slice(0, 10);
    historicoObj.fecha = fechaHoy;

    historicoObj.cant_enviados = await Turnos_no_asistidos.count({
      where: {
        [Op.and]: [
          { estado_envio: 1 },
          {
            updatedAt: {
              [Op.between]: [fechaHoy + " 00:00:00", fechaHoy + " 23:59:59"],
            },
          },
        ],
      },
    });

    historicoObj.cant_no_enviados = await Turnos_no_asistidos.count({
      where: {
        [Op.and]: [
          { estado_envio: { [Op.ne]: 1 } },
          {
            updatedAt: {
              [Op.between]: [fechaHoy + " 00:00:00", fechaHoy + " 23:59:59"],
            },
          },
        ],
      },
    });

    console.log(historicoObj);

    Historicos_no_asistidos.create(historicoObj)
      .then((result) => {
        console.log("Se inserto la cantidad de envios de hoy en historico!");
      })
      //.catch((error) => console.log(error.detail));
      .catch((error) => console.log(error.message));
  }

  /**
   *
   *  METODOS
   *
   */

  app
    .route("/historicos_no_asistidos")
    .get((req, res) => {
      Historicos_no_asistidos.findAll()
        .then((result) => res.json(result))
        .catch((error) => {
          res.status(402).json({
            msg: error.menssage,
          });
        });
    })
    .post((req, res) => {
      Historicos_no_asistidos.create(req.body)
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
    });

  // Historicos por rango de fecha
  app.route("/historicosNoAsistidosFecha").post((req, res) => {
    let fechaHoy = new Date().toISOString().slice(0, 10);
    let { fecha_desde, fecha_hasta } = req.body;

    if (fecha_desde === "" && fecha_hasta === "") {
      fecha_desde = fechaHoy;
      fecha_hasta = fechaHoy;
    }

    if (fecha_hasta == "") {
      fecha_hasta = fecha_desde;
    }

    if (fecha_desde == "") {
      fecha_desde = fecha_hasta;
    }

    console.log(req.body);

    Historicos_no_asistidos.findAll({
      where: {
        fecha: {
          [Op.between]: [fecha_desde + " 00:00:00", fecha_hasta + " 23:59:59"],
        },
      },
    })
      .then((result) => res.json(result))
      .catch((error) => {
        res.status(402).json({
          msg: error.menssage,
        });
      });
  });

  // app
  //   .route("/roles/:role_id")
  //   .get((req, res) => {
  //     Roles.findOne({
  //       where: req.params,
  //     })
  //       .then((result) => res.json(result))
  //       .catch((error) => {
  //         res.status(404).json({
  //           msg: error.message,
  //         });
  //       });
  //   })
  //   .put((req, res) => {
  //     Roles.update(req.body, {
  //       where: req.params,
  //     })
  //       .then((result) => res.sendStatus(204))
  //       .catch((error) => {
  //         res.status(412).json({
  //           msg: error.message,
  //         });
  //       });
  //   })
  //   .delete((req, res) => {
  //     //const id = req.params.id;
  //     Roles.destroy({
  //       where: req.params,
  //     })
  //       .then(() => res.json(req.params))
  //       .catch((error) => {
  //         res.status(412).json({
  //           msg: error.message,
  //         });
  //       });
  //   });
};
