const { Schema, model } = require( 'mongoose' );


const resenaSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false

    },
    
});


module.exports = model(
    'resena',     // Nombre de la entidad (documento) que se registrara en la base de datos (en plural)
    resenaSchema  // Estructura de datos que vamos a generar en nuestro documento
);