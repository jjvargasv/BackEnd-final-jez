const { Router } = require( 'express' );

const router = Router();


router.post( '/register', ( req, res ) => {
    return res.json({
        path: '/register',
        msg: 'Registro de usuario'
    });
});
router.post( '/login', ( req, res ) => {
    return res.json({
        path: '/login',
        msg: 'Login de usuario'
    });
});
router.get( '/renew', ( req, res ) => {
    return res.json({
        path: '/renew',
        msg: 'Renovar token'
    });
});


module.exports = router;