const Servicios = require("../models/Servicio");

const createServicio = async (servicio) => {
  return await Servicios.create(servicio);
};

const getServicios = async () => {
  return await Servicios.find({});
};

const deleteServicio = async (id) => {
  return await Servicios.findOneAndRemove({ _id: id });
};

const updateServicio = async (id, dataUpdate) => {
  
  return await Servicios.findOneAndUpdate({ _id: id }, dataUpdate, { new: true });
};

module.exports = {
  createServicio,
  getServicios,
  deleteServicio,
  updateServicio,
};
