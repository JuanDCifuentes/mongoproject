const mongoose = require("mongoose");

const peliculaSchema = mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  calificacion: {
    type: String,
  },
  genero: {
    type: String,
  },
  year: {
    type: Date,
  },
  sipnosis: {
    type: String,
  },
  duracion: {
    type: Number,
  },
  actores: {
    type: Array,
  },
});

module.exports = mongoose.model("peliculas", peliculaSchema);
