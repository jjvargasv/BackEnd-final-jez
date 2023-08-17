const { Router } = require( 'express' );
const { getContacto, createContacto, updateContacto, deleteContacto } = require('../controllers/contacto.controller');

const router = Router();

/** 
 * Ruta actual: http://localhost:5000/api/contactos
 */

// Ruta para obtener todos las categorias
router.get( 
    '/', 
    getContacto
);


// Ruta para crear categoria (Restringida)
router.post( 
    '/', 
    createContacto
);

// Ruta para actualizar categoria (Restringida)
router.patch( 
    '/:id', 
    updateContacto
);

// Ruta para eliminar categoria (Restringida)
router.delete( 
    '/:id', 
    deleteContacto
);



module.exports = router;