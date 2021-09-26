//THIS ARE THE PACKAGES WE ARE GOING TO USE
const express = require('express');
const app = express();

// BODYPARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CONFIG TO LINK DATABASE THROUGH MONGOOSE
const mongoose = require('mongoose');

<<<<<<< HEAD

=======
>>>>>>> 17a9d070d98b01d68042f38646e35ab3656293d8

//Generating Swagger
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');

const swaggerOptions =  {
    swaggerDefinition: {
        info: {
            title: 'BEDU Music API',
            description: "Informacion de la API de BEDU",
            contact: {
                name: "LEO"
            },
            servers: ["http://localhost:4001/v1"]
        }
    },
    apis: ["app.js"]
};

    const swaggerDocs= swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))


mongoose.connect("mongodb+srv://apiUser:leostonem@cluster0.aimfg.mongodb.net/beduMusic?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})


require('./models/Artist')
require('./models/Concert')
require('./models/Album')
require('./models/User')
require('./models/Track')

require('./config/passport')

//CONFIGURING ROUTES
app.use('/v1', require('./routes'));

// INITIALIZING SERVER
const PORT = 4001;
app.listen(PORT, () => {   /* (process.env.PORT), */
    console.log(`Server listening on http://localhost:${PORT}`)
})


           

           

//Routes
/**
 * @swagger
 * /v1/albums/{id}:
 *      put:
 *        summary: actualiza album de la BD  con ID
 *        tags: [albums]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del album
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */
/**
 
//Routes
/**
 * @swagger
 * /v1/albums/:
 *      get:
 *        summary: te va a mostrar todos los albums de la BD
 *        tags: [albums]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */


