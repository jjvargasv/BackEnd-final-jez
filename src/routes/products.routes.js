const { Router } = require( 'express' );

const { validateToken } = require('../middlewares/validate-jwt.middleware');
const { getProducts, create2Product, getProductById, updateProduct, deleteProduct, getProductsByUserId, obtenerProductosPorCategoria, buscadorPro } = require('../controllers/product.controller');

const {  multerMiddleware  } = require( '../middlewares/upload-file.middleware.js' );

const router = Router();


const testUpload = (req, res, next) => {
    multerMiddleware.single('urlImage')(req, res, (err) => {
      if (err) {
        console.log('Multer error:', err);
      }
      next();
    });
  };


/** 
 * Ruta actual: http://localhost:5000/api/products
 */

// Ruta para obtener todos los productos
router.get( 
    '/', 
    getProducts
);

// Ruta para obtener todos los productos de un usuario
router.get( 
    '/user', 
    validateToken,
    getProductsByUserId
);

router.get(
    '/categoria/:categoria',
    obtenerProductosPorCategoria
);

router.get(
    '/buscador/:term',
    buscadorPro
);

// Ruta para obtener producto por ID
router.get( 
    '/:id', 
    getProductById
);

// Ruta para crear producto (Restringida)
// router.post( 
//     '/', 
//     validateToken,
//     multerMiddleware.single( 'urlImage' ),
//     createProduct
// );
router.post( 
    '/', 
    validateToken,
    multerMiddleware.single( 'urlImage' ),
    create2Product
);

// Ruta para actualizar producto (Restringida)
router.patch( 
    '/:id', 
    validateToken,
    multerMiddleware.single( 'urlImage' ),
    updateProduct
);

// Ruta para eliminar producto (Restringida)
router.delete( 
    '/:id', 
    validateToken,
    deleteProduct
);



module.exports = router;