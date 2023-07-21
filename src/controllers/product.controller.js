const { response, request } = require( 'express' );
const User = require('../models/User');
const { hashSync, genSaltSync, compareSync } = require( 'bcryptjs' );
const { generateToken } = require( '../helpers/jwt.js' );


const getProducts = async ( req = request, res = response ) => {

    try {
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Obtiene todos los productos'
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

    try {
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Obtiene producto por ID'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al obtener producto por ID'
        });    
    }

}

const createProduct = async ( req = request, res = response ) => {

    try {
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Crea producto'
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

    try {
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Actualiza producto'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
            msg: 'Error al actualizar producto'
        });    
    }

}

const deleteProduct = async ( req = request, res = response ) => {

    try {
        res.status( 201 ).json({
            ok: true,
            path: '/products',
            msg: 'Eliminar producto'
        }); 
    } 
    catch ( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: '/products',
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