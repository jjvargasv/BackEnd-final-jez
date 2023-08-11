const Servicios = require("../models/Servicios");

const createServicio = async (servicio) => {
  return await Servicios.create(servicio);
};

const getServicios = async () => {
  return await Servicios.find({});
};

const deleteServicio = (id) => {
  Servicios.deleteOne({ _id: id });
};

const updateServicio = () => {};

module.exports = {
  createServicio,
  getServicios,
  deleteServicio,
  updateServicio,
};
