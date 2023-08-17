const { response, request } = require( 'express' );
const { getAllContacto, insertContacto, removeContacto, reformContacto } = require('../services/contacto.service');


const getContacto = async ( req = request, res = response ) => {
    try {

        const data = await getAllContacto();

        res.status( 200 ).json({
            ok: true,
            path: '/contactos',
            msg: 'Obtiene todos los contactos',
            contactos: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/contactos',
            msg: 'Error al obtener los contactos'
        });    
    }

}

const createContacto = async ( req = request, res = response ) => {
    const inputData = req.body;

    try {

        const data = await insertContacto( inputData );
        
        res.status( 201 ).json({
            ok: true,
            path: '/contactos',
            msg: 'Crea contactos',
            category: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/contactos',
            msg: 'Error al crear contactos'
        });    
    }

}

const updateContacto = async ( req = request, res = response ) => {
    const 
        contactoId = req.params.id,
        inputData = req.body;

    const data = await reformContacto( contactoId, inputData );

    try {

        res.status( 201 ).json({
            ok: true,
            path: `/contactos/123`,
            msg: 'Actualiza contactos',
            category: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/contactos/123`,
            msg: 'Error al actualizar contactos'
        });    
    }

}

const deleteContacto = async ( req = request, res = response ) => {
    const contactoId = req.params.id;

    const data = await removeContacto( contactoId );
    
    try {

        res.status( 201 ).json({
            ok: true,
            path: `/contactos/123`,
            msg: 'Eliminar categoria',
            category: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/contactos/123`,
            msg: 'Error al eliminar categoria'
        });    
    }

}


module.exports = {
    getContacto,
    createContacto,
    updateContacto,
    deleteContacto
}