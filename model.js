var mongoose = require('mongoose');

module.exports = mongoose.Schema({

  nombres: String,
  apellidos: String,
  email: String,
  contrasenia: String,
  foto: String,
  direccion: String,
  latitud: String,
  longitud: String,
  estado: String,
  promedio: Number
});