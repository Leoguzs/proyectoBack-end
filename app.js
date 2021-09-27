//THIS ARE THE PACKAGES WE ARE GOING TO USE
const express = require('express');
const app = express();

// BODYPARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CONFIG TO LINK DATABASE THROUGH MONGOOSE
const mongoose = require('mongoose');


//Generating Swagger
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))


mongoose.connect(MONGO_URI, {
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
app.listen(process.env.PORT, () => {   /* (process.env.PORT), */
    console.log(`Server listening on http://localhost:${process.env.PORT}`)
})




 



 

//////////////////////////////////////////Swagger albums//////////////////////////////
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





/**
 * @swagger
 * /v1/albums/{id}:
 *      get:
 *        summary: obten album de la BD  con ID
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

 * @swagger
 * /v1/albums/{id}:
 *      delete:
 *        summary: elimina album de la BD  con ID
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
 *            description: elimininado exitosamente
*/



//Routes

/**
 * @swagger
 * /v1/albums/:
 *      post: 
 *        description: Agregar album
 *        tags: [albums]
 *        parameters:
 *          - name: album
 *            in: body
 *            description: crear album
 *            schema:
 *              type: object
 *              properties:
 *                 artist:
 *                   type: string
 *                   description: el nombre del artista/banda
 *                   example: Metallica
 *                 discName:
 *                   type: string
 *                   description: el nombre del disco
 *                   example: Meatallica
 *                 year:
 *                   type: string
 *                   description: el año de publicacion del disco
 *                   example: 1991
 *                 label:
 *                   type: string
 *                   description: sello discografico
 *                   example: sony
 *                 genre:
 *                   type: string
 *                   description: genero del disco
 *                   example: rock
 *        responses:
 *         200:
 *           description: succesfull
 *           content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: "ok"
 * 
*/

/////////////////////////////////////////////////////swagger users////////////////////////////////////////

/**
 * @swagger
 * /v1/users/:
 *      get:
 *        summary: te va a mostrar todos los usuarios de la BD
 *        tags: [users]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */

/**
 * @swagger
 * /v1/users/{id}:
 *      get:
 *        summary: obten usuario de la BD  con ID
 *        tags: [users]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del usuario
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */


/**
 * @swagger
 * /v1/users/count/Premium:
 *      get:
 *        summary: te va a mostrar el numero de cuentas Premium
 *        tags: [users]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */
/**
 * @swagger
 * /v1/users/count/Basico:
 *      get:
 *        summary: te va a mostrar el numero de cuentas Basico
 *        tags: [users]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */ 
/**
 * @swagger
 * /v1/users/count:
 *      get:
 *        summary: te va a mostrar el numero de usuarios en la BD
 *        tags: [users]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */ 


/**
 * @swagger
 * /v1/users/{id}:
 *      delete:
 *        summary: elimina usuario de la BD  con ID
 *        tags: [users]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del usuario
 *        responses:
 *          '200':
 *            description: elimininado exitosamente
*/

/**
 * @swagger
 * /v1/users/:
 *      post: 
 *        description: Agregar usuario
 *        tags: [users]
 *        parameters:
 *          - name: user
 *            in: body
 *            description: crear usuario
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                   description: el nombre del usuario
 *                   example: Fer
 *                 lastName:
 *                   type: string
 *                   description: el apellido del usuario
 *                   example: Gomez
 *                 age:
 *                   type: string
 *                   description: edad
 *                   example: 23
 *                 status:
 *                   type: string
 *                   description: si es usuario Premium/Basico
 *                   example: Premium
 *                 email:
 *                   type: string
 *                   description: email
 *                   example: rock@gfjdkf.com
 *        responses:
 *         200:
 *           description: succesfull
 *           content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: "ok"
 * 
*/


/////////////////////////////////////////////////////swagger concerts////////////////////////////////////////

/**
 * @swagger
 * /v1/concerts/:
 *      get:
 *        summary: te va a mostrar todos los conciertos de la BD
 *        tags: [concerts]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */

/**
 * @swagger
 * /v1/concerts/{id}:
 *      get:
 *        summary: obten concierto de la BD  con ID
 *        tags: [concerts]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del concierto
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */

/**
 * @swagger
 * /v1/concerts/{id}:
 *      delete:
 *        summary: elimina concierto de la BD  con ID
 *        tags: [concerts]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del concierto
 *        responses:
 *          '200':
 *            description: concierto elimininado exitosamente
*/

/**
 * @swagger
 * /v1/concerts/:
 *      post: 
 *        description: Agregar concierto
 *        tags: [concerts]
 *        parameters:
 *          - name: concert
 *            in: body
 *            description: crear concierto
 *            schema:
 *              type: object
 *              properties:
 *                 artist:
 *                   type: string
 *                   description: el nombre del artista
 *                   example: Mana
 *                 place:
 *                   type: string
 *                   description: el lugar en donde se llevará a cabo el concierto
 *                   example: Palacio de los Deportes
 *                 date:
 *                   type: string
 *                   description: la fecha del concierto
 *                   example: 25/02/2022              
 *        responses:
 *         200:
 *           description: succesfull
 *           content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: "ok"
 * 
*/

/////////////////////////////////////////////////////swagger artists////////////////////////////////////////

/**
 * @swagger
 * /v1/artists/:
 *      get:
 *        summary: te va a mostrar todos los artistas de la BD
 *        tags: [artists]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */

/**
 * @swagger
 * /v1/artists/{id}:
 *      get:
 *        summary: obten artista de la BD  con ID
 *        tags: [artists]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: sting
 *               required: true
 *               description: El Id del artista
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 */

/**
 * @swagger
 * /v1/artists/{id}:
 *      delete:
 *        summary: elimina un artista de la BD  con ID
 *        tags: [artists]
 *        parameters: 
 *             - in: path 
 *               name: id
 *               schema:
 *                type: string
 *               required: true
 *               description: El Id del artista
 *        responses:
 *          '200':
 *            description: artista elimininado exitosamente
*/

/**
 * @swagger
 * /v1/artists/:
 *      post: 
 *        description: Agregar artista
 *        tags: [artists]
 *        parameters:
 *          - name: artist
 *            in: body
 *            description: crear artista
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                   description: el nombre del artista/banda
 *                   example: My Chemical Romance
 *                 nationality:
 *                   type: string
 *                   description: nacionalidad del artista/banda
 *                   example: American
 *                 year:
 *                   type: string
 *                   description: año de debut del artista/banda
 *                   example: 2001        
 *        responses:
 *         200:
 *           description: succesfull
 *           content:
 *              application/json:
 *                  schema:
 *                      type: string
 *                      example: "ok"
 * 
*/

/////////put prueba////////
