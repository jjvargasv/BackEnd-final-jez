const { Router } = require( 'express' );
const { createUser, authenticateUser, renewToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');

const router = Router();


router.post( 
    '/register', 
    [
        check( 'name', '\'name\' doesn\'t exists').exists(),
        check( 'email', 'Email is required' )
            .trim()
            .isEmail(),
        check( 'password', 'Password is required' )
            .trim()
            .isLength({ min: 8 })
            .withMessage( 'Must be at least 8 chars long' ),
    ], 
    createUser 
);
router.post( 
    '/login', 
    [
        check( 'email', 'Email is required' )
            .trim()
            .isEmail()
            .withMessage( 'Must be at least 8 chars long' ),
        check( 'password', 'Password is required' )
            .trim()
            .isLength({ min: 8 }),
    ],
    authenticateUser 
);
router.get( '/renew', renewToken );


module.exports = router;