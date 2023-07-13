const { route } = require('./routes/auth.routes');

require( 'dotenv' ).config();

const 
    express = require( 'express'  ),
    app = express(),
    PORT = process.env.PORT || 4000;

// console.log( process.env );

/** Middleware de Express */
app.use( '/api/auth', require( './routes/auth.routes' ) );

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }` );
});