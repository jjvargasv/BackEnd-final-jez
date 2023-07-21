const ProductModel = require( '../models/Products.js' );


const insertProduct = async ( product ) => {
    return await ProductModel.create( product );
}

const getAllProducts = async () => {
    return await ProductModel.find({});
}

const getProductById = async ( productId ) => {
    return await ProductModel.findOne({ _id: productId });
}

const removeProductById = async ( productId ) => {
    return await ProductModel.findOneAndRemove({ _id: productId });
}

const updateProductById = async ( productId, updateProduct ) => {
    return await ProductModel.findOneAndUpdate( 
        { _id: productId },     // Id del documento que deseamos actualizar
        updateProduct,          // El documento por el que vamos a actualizar 
        { new: true }           // Configuracion para el comando Update
    );
}


module.exports = {
    insertProduct,
    getAllProducts,
    getProductById,
    removeProductById,
    updateProductById
}