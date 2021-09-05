//requerimos los paquetes para utilizar
const express = require('express');
const app = express();

// BODYPARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurando las rutas
app.use('/v1', require('./routes'));

// INICIALIZACION SERVIDOR 
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
