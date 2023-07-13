require( 'dotenv' ).config();

const 
    express = require( 'express'  ),
    app = express(),
    PORT = process.env.PORT || 4000;

// console.log( process.env );

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }` );
});