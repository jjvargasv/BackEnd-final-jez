const { response, request } = require( 'express' );
const User = require('../models/User');
const { hashSync, genSaltSync } = require( 'bcryptjs' );
const { generateToken } = require( '../helpers/jwt.js' );


const createUser = async ( req = request, res = response ) => {

    const { name, email, password } = req.body;

    try {
        // 1. Verificar que existe el 'email'
        const userFound = await User.findOne({ email });

        if( userFound ) {
            return res.status( 400 ).json({
                ok: false,
                path: '/register',
                msg: 'El usuario ya existe'
            });
        }

        // 2. Crear el nuevo usuario
        const dbUser = new User( req.body );

        // 2. Encriptar la contraseña
        const salt = genSaltSync();
        
        dbUser.password = hashSync( password, salt );

        // 3. Generar el JWT, como metodo de autenticación pasiva
        const token = await generateToken( dbUser._id, name );

        // 4. Registrar usuario en la base de datos
        const newUser = await dbUser.save();

        // 5. Responder al cliente
        console.log( newUser );
        res.status( 201 ).json({
            ok: true,
            path: '/register',
            msg: 'Usuario creado existosamente',
            token,
            user: newUser
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/register',
            msg: 'Error al registrar usuario'
        });    
    }

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