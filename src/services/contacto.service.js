const Contacto = require( '../models/Contacto' );


const getAllContacto = async () => {
    return await Contacto.find({});
}

const getContactoByName = async ( name ) => {
    return await Contacto.findOne({ name });
}

// Contacto: { name: '', description: '' }
const insertContacto = async ( contacto ) => {
    return await Contacto.create( contacto );
}


const reformContacto = async ( contactoId, updateData ) => {
    return await Contacto.findOneAndUpdate(
        { _id: contactoId },    // Encontrar la categoria (_id)
        updateData,             // Los datos (objeto) por el que voy a reemplazar los valores exustentes
        { new: true }           // (Opcional) Establecer una configuracion sobre la consulta
    );
}


const removeContacto = async ( contactoId ) => {
    return await Contacto.findOneAndRemove({ _id: contactoId });
}


module.exports = {
    getAllContacto,
    insertContacto,
    reformContacto,
    removeContacto,
    getContactoByName
}