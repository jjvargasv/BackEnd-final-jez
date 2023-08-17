const { Schema, model } = require( 'mongoose' );


const contactoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    }

});


module.exports = model(
    'contacto',     // Nombre de la entidad (documento) que se registrara en la base de datos (en plural)
    contactoSchema  // Estructura de datos que vamos a generar en nuestro documento
);