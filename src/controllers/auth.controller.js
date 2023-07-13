const { response, request } = require( 'express' );


const createUser = ( req = request, res = response ) => {
    return res.json({
        path: '/register',
        msg: 'Registro de usuario'
    });
}

const authenticateUser = ( req = request, res = response ) => {
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