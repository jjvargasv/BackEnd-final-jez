
const Resenas = require('../models/Resenas');


const getResenas = async () => {
    return await Resenas.find({});
}

// Resenas: { name: '', description: '' }
const insertResenas = async ( resenas ) => {
    return await Resenas.create( resenas );
}
// const insertResenas = async ( Resenas ) => {
//     const createResenas = await Resenas( Resenas );
//     createResenas.save();
// }

const reformResenas = async ( ResenasId, updateData ) => {
    return await Resenas.findOneAndUpdate(
        { _id: ResenasId },    // Encontrar la categoria (_id)
        updateData,             // Los datos (objeto) por el que voy a reemplazar los valores exustentes
        { new: true }           // (Opcional) Establecer una configuracion sobre la consulta
    );
}


const removeResenas = async ( ResenasId ) => {
    return await Resenas.findOneAndRemove({ _id: ResenasId });
}


module.exports = {
    getResenas,
    
    insertResenas,
    reformResenas,
    removeResenas
}