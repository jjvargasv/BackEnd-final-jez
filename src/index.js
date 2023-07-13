const 
    express = require( 'express'  ),
    app = express(),
    PORT = 4000;

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }` );
});