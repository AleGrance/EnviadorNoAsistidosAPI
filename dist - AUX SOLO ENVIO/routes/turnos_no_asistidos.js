"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _config = require("../libs/config");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("sequelize"),
    Op = _require.Op;

var cron = require("node-cron");

var fs = require("fs");

var path = require("path");

var axios = require("axios"); // Conexion con Firebird


var Firebird = require("node-firebird"); // Datos de la conexion Firebird


// Var para la conexion a WWA Free
//const wwaUrl = "http://localhost:3001/lead";
// Conexion a WWA
//const wwaUrl = "http://192.168.10.200:3002/lead";
// AUX
var wwaUrl = "http://192.168.10.200:3011/lead"; // URL del notificador

var wwaUrl_Notificacion = "http://localhost:3088/lead"; //const wwaUrl_Notificacion = "http://localhost:3001/lead";
// Datos del Mensaje de whatsapp

var fileMimeTypeMedia = "";
var fileBase64Media = ""; // Mensaje del notificador

var mensajeBody = ""; // Mensaje pie de imagen

var mensajePie = "\n\n*\xBFNO PUDISTE ASISTIR A TU TURNO?* \uD83D\uDE31\nAgenda un nuevo turno/consulta ingresando al siguiente link http://wa.me/5950214129000 o llamanos al 0214129000\uD83D\uDCF2\n\n_Recorda que en caso de no poder asistir a tu turno debes notificar con tiempo ya que hay otros pacientes aguardando para\xA0ser\xA0agendados_";
var mensajePieCompleto = ""; // Ruta de la imagen JPEG

var imagePath = path.join(__dirname, "..", "img", "imgNoAsistidos.jpeg"); // Leer el contenido de la imagen como un buffer

var imageBuffer = fs.readFileSync(imagePath); // Convertir el buffer a base64

var base64String = imageBuffer.toString("base64"); // Mapear la extensión de archivo a un tipo de archivo

var fileExtension = path.extname(imagePath);
var fileType = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png"
}[fileExtension.toLowerCase()];
fileMimeTypeMedia = fileType; // El split esta al pedo

fileBase64Media = base64String.split(",")[0]; // Tiempo de retraso de consulta al PGSQL para iniciar el envio. 1 minuto

var tiempoRetrasoPGSQL = 1000 * 60; // Tiempo entre envios. Cada 15s se realiza el envío a la API free WWA

var tiempoRetrasoEnvios = 15000; // Blacklist fechas

var blacklist = ["2023-05-02", "2023-05-16", "2023-08-15"];

module.exports = function (app) {
  var Turnos_no_asistidos = app.db.models.Turnos_no_asistidos;
  var Users = app.db.models.Users; // Ejecutar la funcion de 24hs Ayer de Martes(2) a Sabados (6) a las 07:00am

  cron.schedule("00 9 * * 2-6", function () {
    var hoyAhora = new Date();
    var diaHoy = hoyAhora.toString().slice(0, 3);
    var fullHoraAhora = hoyAhora.toString().slice(16, 21); // Checkear la blacklist antes de ejecutar la función

    var now = new Date();
    var dateString = now.toISOString().split("T")[0];

    if (blacklist.includes(dateString)) {
      console.log("La fecha ".concat(dateString, " est\xE1 en la blacklist y no se ejecutar\xE1 la tarea."));
      return;
    }

    console.log("Hoy es:", diaHoy, "la hora es:", fullHoraAhora);
    console.log("CRON: Se consulta al JKMT 24hs Ayer - No Asistidos");
    injeccionFirebird();
  }); // Trae los datos del Firebird - Intenta cada 1 min en caso de error de conexion

  function tryAgain() {
    console.log("Error de conexion con el Firebird, se intenta nuevamente luego de 10s...");
    setTimeout(function () {
      injeccionFirebird();
    }, 1000 * 60);
  } // Trae los datos del Firebird


  function injeccionFirebird() {
    console.log("Obteniendo los datos del Firebird...");
    Firebird.attach(_config.firebird, function (err, db) {
      if (err) {
        console.log(err);
        return tryAgain();
      } // db = DATABASE


      db.query( // Trae los ultimos 50 registros de turnos del JKMT
      "SELECT * FROM VW_RESUMEN_TURNOS_AYER", function (err, result) {
        console.log("Cant de turnos obtenidos del JKMT:", result.length); // Recorre el array que contiene los datos e inserta en la base de postgresql

        result.forEach(function (e) {
          // Si el nro de cert trae NULL cambiar por 000000
          if (!e.NRO_CERT) {
            e.NRO_CERT = " ";
          } // Si no tiene plan


          if (!e.PLAN_CLIENTE) {
            e.PLAN_CLIENTE = " ";
          } // Si el nro de tel trae NULL cambiar por 595000 y cambiar el estado a 2
          // Si no reemplazar el 0 por el 595


          if (!e.TELEFONO_MOVIL) {
            e.TELEFONO_MOVIL = "595000";
            e.estado_envio = 2;
          } else {
            e.TELEFONO_MOVIL = e.TELEFONO_MOVIL.replace(0, "595");
          } // Reemplazar por mi nro para probar el envio
          // if (!e.TELEFONO_MOVIL) {
          //   e.TELEFONO_MOVIL = "595000";
          //   e.estado_envio = 2;
          // } else {
          //   e.TELEFONO_MOVIL = "595986153301";
          // }
          // Poblar PGSQL


          Turnos_no_asistidos.create(e) //.then((result) => res.json(result))
          ["catch"](function (error) {
            return console.log("Error al poblar PGSQL", error.message);
          });
        }); // IMPORTANTE: cerrar la conexion

        db.detach();
        console.log("Llama a la funcion iniciar envio que se retrasa 1 min en ejecutarse No Asistidos");
        iniciarEnvio();
      });
    });
  } //injeccionFirebird();
  // Inicia los envios - Consulta al PGSQL


  var losTurnos = [];

  function iniciarEnvio() {
    setTimeout(function () {
      Turnos_no_asistidos.findAll({
        where: {
          estado_envio: 0
        },
        order: [["createdAt", "DESC"]]
      }).then(function (result) {
        losTurnos = result;
        console.log("Enviando turnos No Asistidos:", losTurnos.length);
      }).then(function () {
        enviarMensaje();
      })["catch"](function (error) {
        res.status(402).json({
          msg: error.menssage
        });
      });
    }, tiempoRetrasoPGSQL);
  }

  iniciarEnvio(); // Reintentar envio si la API WWA falla

  function retry() {
    console.log("Se va a intentar enviar nuevamente luego de 2m ...");
    setTimeout(function () {
      iniciarEnvio();
    }, 1000 * 60);
  } // Envia los mensajes


  var retraso = function retraso() {
    return new Promise(function (r) {
      return setTimeout(r, tiempoRetrasoEnvios);
    });
  };

  function enviarMensaje() {
    return _enviarMensaje.apply(this, arguments);
  } // Update estado en caso de error


  function _enviarMensaje() {
    _enviarMensaje = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var i, turnoId, dataBody, response, data, body, _body, errMsg;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("Inicia el recorrido del for para enviar los turnos No Asistidos");
              _context.prev = 1;
              i = 0;

            case 3:
              if (!(i < losTurnos.length)) {
                _context.next = 39;
                break;
              }

              turnoId = losTurnos[i].id_turno;
              mensajePieCompleto = losTurnos[i].CLIENTE + mensajePie;
              dataBody = {
                message: mensajePieCompleto,
                phone: losTurnos[i].TELEFONO_MOVIL,
                mimeType: fileMimeTypeMedia,
                data: fileBase64Media,
                fileName: "",
                fileSize: ""
              };
              _context.prev = 7;
              _context.next = 10;
              return axios.post(wwaUrl, dataBody, {
                timeout: 1000 * 60
              });

            case 10:
              response = _context.sent;
              // Procesar la respuesta aquí...
              data = response.data;

              if (data.responseExSave.id) {
                console.log("Enviado - OK"); // Se actualiza el estado a 1

                body = {
                  estado_envio: 1
                };
                Turnos_no_asistidos.update(body, {
                  where: {
                    id_turno: turnoId
                  }
                }) //.then((result) => res.json(result))
                ["catch"](function (error) {
                  res.status(412).json({
                    msg: error.message
                  });
                });
              }

              if (data.responseExSave.unknow) {
                console.log("No Enviado - unknow"); // Se actualiza el estado a 3

                _body = {
                  estado_envio: 3
                };
                Turnos_no_asistidos.update(_body, {
                  where: {
                    id_turno: turnoId
                  }
                }) //.then((result) => res.json(result))
                ["catch"](function (error) {
                  res.status(412).json({
                    msg: error.message
                  });
                });
              }

              if (!data.responseExSave.error) {
                _context.next = 26;
                break;
              }

              console.log("No enviado - error");
              errMsg = data.responseExSave.error.slice(0, 17);

              if (!(errMsg === "Escanee el código")) {
                _context.next = 21;
                break;
              }

              console.log("Error 104: ", errMsg); // Vacia el array de los turnos para no notificar por cada turno cada segundo

              losTurnos = [];
              throw new Error("Error en sesi\xF3n en respuesta de la solicitud Axios - ".concat(errMsg));

            case 21:
              if (!(errMsg === "Protocol error (R")) {
                _context.next = 25;
                break;
              }

              console.log("Error 105: ", errMsg); // Vacia el array de los turnos para no notificar por cada turno cada segundo

              losTurnos = [];
              throw new Error("Error en sesi\xF3n en respuesta de la solicitud Axios - ".concat(errMsg));

            case 25:
              // El numero esta mal escrito o supera los 12 caracteres
              if (errMsg === "Evaluation failed") {
                updateEstatusERROR(turnoId, 106); //console.log("Error 106: ", data.responseExSave.error);
              }

            case 26:
              _context.next = 34;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](7);
              console.error("Error en la solicitud Axios:", _context.t0.code); // Manejar el error específico

              if (_context.t0.code === "ECONNABORTED") {
                console.error("La solicitud tardó demasiado y se canceló", _context.t0.code);
                notificarSesionOff("Error02 de conexión con la API: " + _context.t0.code);
              } else {
                console.error("Error de conexión con la API: ", _context.t0.code);
                notificarSesionOff("Error02 de conexión con la API: " + _context.t0.code);
              } // Lanzar una excepción para detener el bucle


              losTurnos = [];
              throw new Error("\"Error de conexi\xF3n en la solicitud Axios - ".concat(_context.t0.code));

            case 34:
              _context.next = 36;
              return retraso();

            case 36:
              i++;
              _context.next = 3;
              break;

            case 39:
              console.log("Fin del envío");
              _context.next = 45;
              break;

            case 42:
              _context.prev = 42;
              _context.t1 = _context["catch"](1);
              console.error("Error en el bucle principal:", _context.t1.message); // Manejar el error del bucle aquí

            case 45:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 42], [7, 28]]);
    }));
    return _enviarMensaje.apply(this, arguments);
  }

  function updateEstatusERROR(turnoId, cod_error) {
    // Se actualiza el estado segun el errors
    var body = {
      estado_envio: cod_error
    };
    Turnos_no_asistidos.update(body, {
      where: {
        id_turno: turnoId
      }
    }) //.then((result) => res.json(result))
    ["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }
  /**
   *  NOTIFICADOR DE ERRORES
   */


  var retrasoNotificador = function retrasoNotificador() {
    return new Promise(function (r) {
      return setTimeout(r, 5000);
    });
  };

  var numerosNotificados = [{
    NOMBRE: "Alejandro",
    NUMERO: "595986153301"
  }, {
    NOMBRE: "Alejandro Corpo",
    NUMERO: "595974107341"
  } //{ NOMBRE: "Juan Corpo", NUMERO: "595991711570" },
  ];

  function notificarSesionOff(_x) {
    return _notificarSesionOff.apply(this, arguments);
  }
  /*
      METODOS HTTP
  */


  function _notificarSesionOff() {
    _notificarSesionOff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(error) {
      var _iterator, _step, item;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(numerosNotificados);
              _context2.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context2.next = 12;
                break;
              }

              item = _step.value;
              console.log(item);
              mensajeBody = {
                message: "*Error en la API - EnviadorNoAsistidos*\n".concat(error),
                phone: item.NUMERO,
                mimeType: "",
                data: "",
                fileName: "",
                fileSize: ""
              }; // Envia el mensaje

              axios.post(wwaUrl_Notificacion, mensajeBody, {
                timeout: 10000
              }).then(function (response) {
                var data = response.data;

                if (data.responseExSave.id) {
                  console.log("**Notificacion de ERROR Enviada - OK");
                }

                if (data.responseExSave.error) {
                  console.log("**Notificacion de ERROR No enviado - error");
                  console.log("**Verificar la sesion local: " + wwaUrl_Notificacion);
                }
              })["catch"](function (error) {
                console.error("**Ocurrió un error - Notificacion de ERROR No enviado:", error.code);
                console.log("**Verificar la sesion local: " + wwaUrl_Notificacion);
              }); // Espera 5s

              _context2.next = 10;
              return retrasoNotificador();

            case 10:
              _context2.next = 3;
              break;

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);

              _iterator.e(_context2.t0);

            case 17:
              _context2.prev = 17;

              _iterator.f();

              return _context2.finish(17);

            case 20:
              // Reintentar el envio luego de 1m
              retry();

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 14, 17, 20]]);
    }));
    return _notificarSesionOff.apply(this, arguments);
  }

  app.route("/turnosNoAsistidos").get(function (req, res) {
    Turnos_no_asistidos.findAll({
      order: [["createdAt", "DESC"]]
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }).post(function (req, res) {
    //console.log(req.body);
    Turnos_no_asistidos.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      return res.json(error);
    });
  }); // Trae los turnos que tengan en el campo estado_envio = 0

  app.route("/turnosNoAsistidosPendientes").get(function (req, res) {
    Turnos_no_asistidos.findAll({
      where: {
        estado_envio: 0
      },
      order: [["FECHA_CREACION", "ASC"]] //limit: 5

    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }); // Trae los turnos que ya fueron notificados hoy

  app.route("/turnosNoAsistidosNotificados").get(function (req, res) {
    // Fecha de hoy 2022-02-30
    var fechaHoy = new Date().toISOString().slice(0, 10);
    Turnos_no_asistidos.count({
      where: _defineProperty({}, Op.and, [{
        estado_envio: 1
      }, {
        updatedAt: _defineProperty({}, Op.between, [fechaHoy + " 00:00:00", fechaHoy + " 23:59:59"])
      }]) //order: [["FECHA_CREACION", "DESC"]],

    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }); // Trae la cantidad de turnos enviados por rango de fecha desde hasta

  app.route("/turnosNoAsistidosNotificadosFecha").post(function (req, res) {
    var fechaHoy = new Date().toISOString().slice(0, 10);
    var _req$body = req.body,
        fecha_desde = _req$body.fecha_desde,
        fecha_hasta = _req$body.fecha_hasta;

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
    Turnos_no_asistidos.count({
      where: _defineProperty({}, Op.and, [{
        estado_envio: 1
      }, {
        updatedAt: _defineProperty({}, Op.between, [fecha_desde + " 00:00:00", fecha_hasta + " 23:59:59"])
      }]) //order: [["createdAt", "DESC"]],

    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  });
  app.route("/turnosNoAsistidos/:id_turno").get(function (req, res) {
    Turnos_no_asistidos.findOne({
      where: req.params,
      include: [{
        model: Users,
        attributes: ["user_fullname"]
      }]
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Turnos_no_asistidos.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    //const id = req.params.id;
    Turnos_no_asistidos.destroy({
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