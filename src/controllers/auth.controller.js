const createUser = ( req, res ) => {
    return res.json({
        path: '/register',
        msg: 'Registro de usuario'
    });
}

const authenticateUser = ( req, res ) => {
    return res.json({
        path: '/login',
        msg: 'Login de usuario'
    });
}

const renewToken = ( req, res ) => {
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