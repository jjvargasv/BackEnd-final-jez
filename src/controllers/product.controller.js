const { response, request } = require( 'express' );
const { hashSync, genSaltSync, compareSync } = require( 'bcryptjs' );

const { generateToken } = require( '../helpers/jwt.js' );
const { insertProduct, getAllProducts, getProductByID, updateProductByID, removeProductByID, getProductByUserID } = require( '../services/product.service' );

const User = require( '../models/User' );


const getProducts = async ( req = request, res = response ) => {

    try {
        const data = await getAllProducts()   // Pendiente

        res.status( 200 ).json({
            ok: true,
            path: '/products',
            msg: 'Obtiene todos los productos',
            products: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al obtener los productos'
        });    
    }

}

const getProductById = async ( req = request, res = response ) => {
    const productId = req.params.id;

    try {
        const data = await getProductByID( productId );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Obtiene producto por ID',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al obtener producto por ID'
        });    
    }

}

const getProductsByUserId = async ( req = request, res = request ) => {

    const userId = req.authUser.uid;

    try {
        const data = await getProductByUserID( userId );

        console.log( data );

        res.status( 200 ).json({
            ok: true,
            path: `/products/user/${ userId }`,
            msg: 'Obtiene el listado de productos por usuario',
            products: data
        }); 
    } catch (error) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/user/${ userId }`,
            msg: 'Error al obtener el listado de productos por usuario'
        });    
    }
}

const createProduct = async ( req = request, res = response ) => {
    const inputData = req.body;
    const userId = req.authUser.uid;
    const newProduct = { ...inputData, userId };

    console.log( newProduct );

    try {
        inputData.userId = userId;

        const data = await insertProduct( newProduct );

        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Crea producto',
            product: data
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al crear producto'
        });    
    }

}

const updateProduct = async ( req = request, res = response ) => {
    const 
        productId = req.params.id,
        userId = req.authUser.uid,
        inputData = req.body;

    try {
        const data = await updateProductByID( productId, userId, inputData );

        if( data ) {
            res.status( 200 ).json({
                ok: true,
                path: `/products/${ productId }`,
                msg: 'Actualiza producto',
                product: data
            }); 
        }
        else {
            return res.status( 404 ).json({
                ok: false,
                path: `/products/${ productId }`,
                msg: 'Producto no encontrado'
            }); 
        }

    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al actualizar producto'
        });    
    }

}

const deleteProduct = async ( req = request, res = response ) => {
    const productId = req.params.id;
    const userId = req.authUser.uid;

    try {
        const data = await removeProductByID( productId, userId );

        if( data ) {
            res.status( 200 ).json({
                ok: true,
                path: `/products/${ productId }`,
                msg: 'Eliminar producto',
                product: data
            });    
        }
        else {
            return res.status( 404 ).json({
                ok: false,
                path: `/products/${ productId }`,
                msg: 'Producto no encontrado'
            });    
        }

    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/products/${ productId }`,
            msg: 'Error al eliminar producto'
        });    
    }

}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsByUserId
}