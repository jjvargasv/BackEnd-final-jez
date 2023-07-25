const { response, request } = require( 'express' );


const getCategories = async ( req = request, res = response ) => {
    try {

        res.status( 200 ).json({
            ok: true,
            path: '/categories',
            msg: 'Obtiene todos los categorias'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/categories',
            msg: 'Error al obtener los categorias'
        });    
    }

}

const createCategory = async ( req = request, res = response ) => {
    try {
        
        res.status( 201 ).json({
            ok: true,
            path: '/categories',
            msg: 'Crea categoria'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/categories',
            msg: 'Error al crear categoria'
        });    
    }

}

const updateCategory = async ( req = request, res = response ) => {

    try {

        res.status( 201 ).json({
            ok: true,
            path: `/categories/123`,
            msg: 'Actualiza categoria'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/categories/123`,
            msg: 'Error al actualizar categoria'
        });    
    }

}

const deleteCategory = async ( req = request, res = response ) => {
    try {

        res.status( 201 ).json({
            ok: true,
            path: `/categories/123`,
            msg: 'Eliminar categoria'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/categories/123`,
            msg: 'Error al eliminar categoria'
        });    
    }

}


module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}