const { response, request } = require( 'express' );
const { hashSync, genSaltSync, compareSync } = require( 'bcryptjs' );

const { generateToken } = require( '../helpers/jwt.js' );
const { insertProduct, getAllProducts, getProductByID, updateProductByID, removeProductByID } = require( '../services/product.service' );

const User = require( '../models/User' );


const getProducts = async ( req = request, res = response ) => {

    try {
        const data = await getAllProducts()   // Pendiente

        res.status( 201 ).json({
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

const createProduct = async ( req = request, res = response ) => {
    const inputData = req.body;
    const userId = req.authUser.uid;

    try {
        inputData.userId = userId;

        const data = await insertProduct( inputData );

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
        inputData = req.body;

    try {
        const data = await updateProductByID( productId, inputData );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Actualiza producto',
            product: data
        }); 
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

    try {
        const data = await removeProductByID( productId );

        res.status( 201 ).json({
            ok: true,
            path: `/products/${ productId }`,
            msg: 'Eliminar producto',
            product: data
        }); 
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
    deleteProduct
}