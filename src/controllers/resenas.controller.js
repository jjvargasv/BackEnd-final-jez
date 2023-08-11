const { response, request } = require( 'express' );
const { getResenas, insertResenas, removeResenas, reformResenas } = require('../services/resena.service');


const getAllResenas = async ( req = request, res = response ) => {
    try {

        const data = await getResenas();

        res.status( 200 ).json({
            ok: true,
            path: '/Resenas',
            msg: 'Obtiene todos los Resenas',
            resenas: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/Resenas',
            msg: 'Error al obtener los Resenas'
        });    
    }

}

const createResenas = async ( req = request, res = response ) => {
    const inputData = req.body;

    try {

        const data = await insertResenas( inputData );
        
        res.status( 201 ).json({
            ok: true,
            path: '/Resenas',
            msg: 'Crea Resenas',
            Resenas: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/Resenas',
            msg: 'Error al crear Resenas'
        });    
    }

}

const updateResenas = async ( req = request, res = response ) => {
    const 
        ResenasId = req.params.id,
        inputData = req.body;

    const data = await reformResenas( ResenasId, inputData );

    try {

        res.status( 201 ).json({
            ok: true,
            path: `/Resenas/123`,
            msg: 'Actualiza Resenas',
            Resenas: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/Resenas/123`,
            msg: 'Error al actualizar Resenas'
        });    
    }

}

const deleteResenas = async ( req = request, res = response ) => {
    const ResenasId = req.params.id;

    const data = await removeResenas( ResenasId );
    
    try {

        res.status( 201 ).json({
            ok: true,
            path: `/Resenas/123`,
            msg: 'Eliminar Resenas',
            Resenas: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/Resenas/123`,
            msg: 'Error al eliminar Resenas'
        });    
    }

}


module.exports = {
    getAllResenas,
    createResenas,
    updateResenas,
    deleteResenas
}