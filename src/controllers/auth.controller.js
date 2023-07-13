const { response, request } = require( 'express' );
const { validationResult } = require('express-validator');


const createUser = ( req = request, res = response ) => {
    const errors = validationResult( req );
    console.log( errors );

    // Verificamos si la lista de errores no esta vacia
    if( ! errors.isEmpty() ) {
        return res.status( 400 ).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    return res.json({
        path: '/register',
        msg: 'Registro de usuario'
    });
}

const authenticateUser = ( req = request, res = response ) => {
    const errors = validationResult( req );
    console.log( errors );

    // Verificamos si la lista de errores no esta vacia
    if( ! errors.isEmpty() ) {
        return res.status( 400 ).json({
            ok: false,
            errors: errors.mapped()
        });
    }


    return res.json({
        path: '/login',
        msg: 'Login de usuario'
    });
}

const renewToken = ( req = request, res = response ) => {
    return res.json({
        path: '/renew',
        msg: 'Renovar token'
    });
}

module.exports = {
    createUser,
    authenticateUser,
    renewToken
}