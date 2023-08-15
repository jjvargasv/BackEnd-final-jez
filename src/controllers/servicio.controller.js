const Category = require("../models/Category");
const { getCategoryByName } = require("../services/category.service");
const { createServicio, getServicios, deleteServicio, getServiciosPorCategoria, updateServicio } = require("../services/servicio.service");

const creaServicio = async (req, res) => {
    const datoDeEntrada = req.body
    const userId= req.authUser.uid

    const newServicio ={...datoDeEntrada, userId}

    try {
        const dataCreada = await createServicio(newServicio)
        res.status(201).json({
            ok: true,
            msg: 'Servicio creado exitosamente',
            servicio:dataCreada
,        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            'msg': 'Error al crear servicio'
        })
        
    }
    
};

const obtenerServicios = async (req, res) => {
    try {
        const listData = await getServicios()
        res.status(200).json({
            ok: true,
            servicios: listData
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            'msg': 'Error al crear la lista'
        })
        
    }
};

const eliminaServicios = async (req, res) => {
    const idEliminar = req.params.id

    try {
       const servicioEliminado = await deleteServicio(idEliminar)
       res.status(200).json({
        ok:true,
        servicio: servicioEliminado
       })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            'msg': 'Error al eliminar servicio'
        })
        
    }
};
const actualizaServicios = async (req, res) => {
    const idActualizar = req.params.id
    const datoDeEntrada = req.body

    try {
       const servicioActualizado = await updateServicio(idActualizar, datoDeEntrada)
       res.status(200).json({
        ok:true,
        servicio: servicioActualizado
       })
        

        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            'msg': 'Error al actualizar servicio'
        })
        
    }
};



module.exports = {
  creaServicio,
  obtenerServicios,
  eliminaServicios,
  actualizaServicios
  
};
