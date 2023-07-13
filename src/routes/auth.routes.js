const { Router } = require( 'express' );
const { createUser, authenticateUser, renewToken } = require('../controllers/auth.controller');

const router = Router();


router.post( '/register', createUser );
router.post( '/login', authenticateUser );
router.get( '/renew', renewToken );


module.exports = router;