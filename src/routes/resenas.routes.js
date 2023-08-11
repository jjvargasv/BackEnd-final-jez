const { Router } = require( 'express' );
require('../controllers/product.controller');
const { getAllResenas, createResenas, updateResenas, deleteResenas } = require('../controllers/resenas.controller');

const router = Router();

/** 
 * Ruta actual: http://localhost:5000/api/resenas
 */

// Ruta para obtener todos las categorias
router.get( 
    '/', 
    getAllResenas
);


// Ruta para crear Resenas (Restringida)
router.post( 
    '/', 
    createResenas
);

// Ruta para actualizar Resenas (Restringida)
router.patch( 
    '/:id', 
    updateResenas
);

// Ruta para eliminar Resenas (Restringida)
router.delete( 
    '/:id', 
    deleteResenas
);



module.exports = router;