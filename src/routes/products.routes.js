const { Router } = require( 'express' );
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const validateInputFields = require('../middlewares/validate-input-fields.middleware');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

const router = Router();


router.get( 
    '/', 
    ( req, res ) => {
        res.json({
            ok: true,
            path: '/products',
            msg: 'Obtiene todos los productos'
        });
    } 
);

router.get( 
    '/:id', 
    ( req, res ) => {
        res.json({
            ok: true,
            path: '/products',
            msg: 'Obtiene producto por ID'
        });
    } 
);

router.post( 
    '/', 
    ( req, res ) => {
        res.json({
            ok: true,
            path: '/products',
            msg: 'Crear producto'
        });
    } 
);

router.patch( 
    '/:id', 
    ( req, res ) => {
        res.json({
            ok: true,
            path: '/products',
            msg: 'Actualizar parcialmente producto'
        });
    } 
);

router.delete( 
    '/:id', 
    ( req, res ) => {
        res.json({
            ok: true,
            path: '/products',
            msg: 'Eliminar producto'
        });
    } 
);


module.exports = router;