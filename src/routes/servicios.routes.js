const { Router } = require('express');
const { obtenerServicios, actualizaServicios, eliminaServicios, creaServicio} = require('../controllers/servicio.controller');
const { validate } = require('../models/Servicio');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

const router = Router()

router.get('/', obtenerServicios)
router.post('/', validateToken, creaServicio)
router.patch('/:id', actualizaServicios)
router.delete('/:id',eliminaServicios)


module.exports = router