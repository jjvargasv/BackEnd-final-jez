const mongoose = require("mongoose");

const serviciosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precioServicio: {
    type: Number,
    required: true,
  },
  notas: {
    type: String,
    required: false,
  },
  urlImage: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  categoryServicios: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("servicios", serviciosSchema);
