const { Router } = require( 'express' );
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const validateInputFields = require('../middlewares/validate-input-fields.middleware');
const { validateToken } = require('../middlewares/validate-jwt.middleware');
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller');

const router = Router();


router.get( 
    '/', 
    getProducts
);

router.get( 
    '/:id', 
    getProductById
);

router.post( 
    '/', 
    createProduct
);

router.patch( 
    '/:id', 
    updateProduct
);

router.delete( 
    '/:id', 
    deleteProduct
);



module.exports = router;