//////////////////////////////////////////Swagger DOC//////////////////////////////
/**
 * @swagger
 * paths:
 *
 *   /v1/albums/:
 *     get:
 *       summary: te va a mostrar todos los albums de la BD
 *       tags: [albums]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     post:
 *       summary: Agregar album
 *       tags: [albums]
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Album'
 *       responses:
 *         '200':
 *            description: ok
 *            content:
 *               application/json:
 *                   schema:
 *                       type: string
 *                       example: "ok"
 *
 *
 *   /v1/albums/{id}:
 *     get:
 *       summary: obten album de la BD  con ID
 *       tags: [albums]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: "6151567d1580380016ab9aee"
 *         description: El Id del album
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *
 *     put:
 *       tags:
 *       - albums
 *       summary: Actualiza la información
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Album'
 *       parameters:
 *       - in: path
 *         name: id
 *         example: "6151567d1580380016ab9aee"
 *         schema:
 *           type: string
 *         required: true
 *         description: id album
 *       responses:
 *         '201':
 *           description: ok
 *#           content:
 *#             application/json:
 *#               schema:
 *#                 $ref: '#/components/schemas/Album'
 *
 *     delete:
 *       summary: elimina album de la BD  con ID
 *       tags: [albums]
 *       parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El Id del album
 *       responses:
 *         '200':
 *           description: elimininado exitosamente
 *
 *
 *   /v1/albums/search:
 *     get:
 *       tags:
 *       - albums
 *       summary: Busca información por atributo
 *       parameters:
 *       #- $ref: '#/components/parameters/artists'
 *       - $ref: '#/components/parameters/artist'
 *       - $ref: '#/components/parameters/name'
 *       - $ref: '#/components/parameters/discName'
 *       - $ref: '#/components/parameters/year'
 *       - $ref: '#/components/parameters/label'
 *       - $ref: '#/components/parameters/genre'
 *       - $ref: '#/components/parameters/album_type'
 *       - $ref: '#/components/parameters/release_date'
 *       #- $ref: '#/components/parameters/genres'
 *       - $ref: '#/components/parameters/total_tracks'
 *       #- $ref: '#/components/parameters/tracks'
 *       #- $ref: '#/components/parameters/images'
 *       - $ref: '#/components/parameters/type'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Album'
 *
 *
 *   /v1/albums/all:
 *     get:
 *       tags:
 *       - albums
 *       summary: Busca información con límite
 *       parameters:
 *       - $ref: '#/components/parameters/limit'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Album'
 *
 *   /v1/albums/fields:
 *     get:
 *       tags:
 *       - albums
 *       summary: Busca información campos específicos
 *       parameters:
 *       - $ref: '#/components/parameters/bartists'
 *       - $ref: '#/components/parameters/bartist'
 *       - $ref: '#/components/parameters/bname'
 *       - $ref: '#/components/parameters/bdiscName'
 *       - $ref: '#/components/parameters/byear'
 *       - $ref: '#/components/parameters/blabel'
 *       - $ref: '#/components/parameters/bgenre'
 *       - $ref: '#/components/parameters/balbum_type'
 *       - $ref: '#/components/parameters/brelease_date'
 *       - $ref: '#/components/parameters/bgenres'
 *       - $ref: '#/components/parameters/btotal_tracks'
 *       - $ref: '#/components/parameters/btracks'
 *       - $ref: '#/components/parameters/bimages'
 *       - $ref: '#/components/parameters/btype'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Album'
 *
 *
 *
 *
 *
 *   /v1/artists/:
 *     get:
 *       summary: te va a mostrar todos los artist  d la BD
 *       tags: [artists]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     post:
 *       summary: Agregar artista
 *       tags: [artists]
 *       requestBody:
 *         description: Descripcion Reques Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Artist'
 *       responses:
 *        200:
 *          description: succesfull
 *          content:
 *             application/json:
 *                 schema:
 *                     type: string
 *                     example: "ok"
 *
 *   /v1/artists/{id}:
 *     get:
 *       summary: obten artista de la BD  con ID
 *       tags: [artists]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del artista
 *         example: "61522544aa58a577e3aea8cd"
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *
 *     put:
 *        tags:
 *        - artists
 *        summary: Actualiza la información
 *        requestBody:
 *          description: Descripcion Reques Body
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Artist'
 *        parameters:
 *        - in: path
 *          name: id
 *          example: "61522544aa58a577e3aea8cd"
 *          schema:
 *            type: string
 *          required: true
 *          description: id artist
 *        responses:
 *          '201':
 *            description: ok
 *  #          content:
 *  #            application/json:
 *  #              schema:
 *  #                $ref: '#/components/schemas/Artist'
 *
 *
 *     delete:
 *       summary: elimina un artista de la BD  con ID
 *       tags: [artists]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del artista
 *       responses:
 *         '200':
 *           description: artista elimininaexitosamente
 *
 *
 *   /v1/artists/search:
 *     get:
 *       tags:
 *       - artists
 *       summary: Busca información por atributo
 *       parameters:
 *       - $ref: '#/components/parameters/artist_name2'
 *       - $ref: '#/components/parameters/nationality'
 *       #- $ref: '#/components/parameters/year'
 *       #- $ref: '#/components/parameters/genres'
 *       #- $ref: '#/components/parameters/images'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Artist'
 *
 *
 *   /v1/artists/all:
 *     get:
 *       tags:
 *       - artists
 *       summary: Busca información con límite
 *       parameters:
 *       - $ref: '#/components/parameters/limit'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Artist'
 *
 *   /v1/artists/fields:
 *     get:
 *       tags:
 *       - artists
 *       summary: Busca información campos específicos
 *       parameters:
 *       - $ref: '#/components/parameters/bname'
 *       - $ref: '#/components/parameters/bnationality'
 *       #- $ref: '#/components/parameters/year'
 *       #- $ref: '#/components/parameters/genres'
 *       #- $ref: '#/components/parameters/images'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Artist'
 *
 *
 *   /v1/concerts/:
 *     get:
 *       summary: te va a mostrar todos los conciert  de la BD
 *       tags: [concerts]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     post:
 *       summary: Agregar concierto
 *       tags: [concerts]
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Concert'
 *       responses:
 *        200:
 *          description: succesfull
 *          content:
 *             application/json:
 *                 schema:
 *                     type: string
 *                     example: "ok"
 *
 *
 *   /v1/concerts/{id}:
 *     get:
 *       summary: obten concierto de la BD  con ID
 *       tags: [concerts]
 *       parameters:
 *            - in: path
 *              name: id
 *              schema:
 *               type: string
 *              required: true
 *              description: El Id del concierto
 *              example: "61522d41aa58a577e3aea8ce"
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     put:
 *       tags:
 *       - concerts
 *       summary: Actualiza la información
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Concert'
 *       parameters:
 *       - in: path
 *         name: id
 *         example: "61522d41aa58a577e3aea8ce"
 *         schema:
 *           type: string
 *         required: true
 *         description: id concert
 *       responses:
 *         '201':
 *           description: ok
 *#           content:
 *#             application/json:
 *#               schema:
 *#                 $ref: '#/components/schemas/Concert'
 *
 *     delete:
 *       summary: elimina concierto de la BD  con ID
 *       tags: [concerts]
 *       parameters:
 *            - in: path
 *              name: id
 *              schema:
 *               type: string
 *              required: true
 *              description: El Id del concierto
 *       responses:
 *         '200':
 *           description: concierto elimininad itosament
 *
 *   /v1/concerts/search:
 *     get:
 *       tags:
 *       - concerts
 *       summary: Busca información por atributo
 *       parameters:
 *       - $ref: '#/components/parameters/idartist'
 *       #- $ref: '#/components/parameters/artist'
 *       - $ref: '#/components/parameters/place'
 *       - $ref: '#/components/parameters/date'
 *       #- $ref: '#/components/parameters/location'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Concert'
 *
 *
 *   /v1/concerts/all:
 *     get:
 *       tags:
 *       - concerts
 *       summary: Busca información con límite
 *       parameters:
 *       - $ref: '#/components/parameters/limit'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Concert'
 *
 *   /v1/concerts/fields:
 *     get:
 *       tags:
 *       - concerts
 *       summary: Busca información campos específicos
 *       parameters:
 *       - $ref: '#/components/parameters/idartist'
 *       #- $ref: '#/components/parameters/artist'
 *       - $ref: '#/components/parameters/bplace'
 *       - $ref: '#/components/parameters/bdate'
 *       #- $ref: '#/components/parameters/location'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Concert'
 *
 *   /v1/concerts/searchnear:
 *     get:
 *       tags:
 *       - concerts
 *       summary: Busca concierto cercano
 *       parameters:
 *       - $ref: '#/components/parameters/lon'
 *       - $ref: '#/components/parameters/lat'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Concert'
 *
 *   /v1/tracks/:
 *     get:
 *       summary: te va a mostrar todas las cancines  de la BD
 *       tags: [tracks]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     post:
 *       summary: Agregar cancion
 *       tags: [tracks]
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       responses:
 *        200:
 *          description: successfull
 *          content:
 *             application/json:
 *                 schema:
 *                     type: string
 *                     example: "ok"
 *
 *
 *   /v1/tracks/{id}:
 *     get:
 *       summary: obten cancion de la BD  con ID
 *       tags: [tracks]
 *       parameters:
 *            - in: path
 *              name: id
 *              schema:
 *               type: string
 *              required: true
 *              description: El Id del a cancion
 *              example: "61507348aa58a577e3aea8c3"
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     put:
 *       tags:
 *       - tracks
 *       summary: Actualiza la información
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       parameters:
 *       - in: path
 *         name: id
 *         example: "61507348aa58a577e3aea8c3"
 *         schema:
 *           type: string
 *         required: true
 *         description: id track
 *       responses:
 *         '201':
 *           description: ok
 *#           content:
 *#             application/json:
 *#               schema:
 *#                 $ref: '#/components/schemas/Track'
 *
 *
 *     delete:
 *       summary: elimina cancion de la BD  con ID
 *       tags: [tracks]
 *       parameters:
 *            - in: path
 *              name: id
 *              schema:
 *               type: string
 *              required: true
 *              description: El Id dela cancion
 *       responses:
 *         '200':
 *           description: cancion elimininad exiitosament
 *
 *   /v1/tracks/search:
 *     get:
 *       tags:
 *       - tracks
 *       summary: Busca información por atributo
 *       parameters:
 *       - $ref: '#/components/parameters/name'
 *       - $ref: '#/components/parameters/disc_number'
 *       - $ref: '#/components/parameters/track_number'
 *       - $ref: '#/components/parameters/album'
 *       #- $ref: '#/components/parameters/artists'
 *       - $ref: '#/components/parameters/duration_ms'
 *       - $ref: '#/components/parameters/audio_url'
 *       - $ref: '#/components/parameters/type'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Track'
 *
 *
 *
 *
 *   /v1/tracks/all:
 *     get:
 *       tags:
 *       - tracks
 *       summary: Busca información con límite
 *       parameters:
 *       - $ref: '#/components/parameters/limit'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Track'
 *
 *   /v1/tracks/fields:
 *     get:
 *       tags:
 *       - tracks
 *       summary: Busca información campos específicos
 *       parameters:
 *       - $ref: '#/components/parameters/name'
 *       - $ref: '#/components/parameters/bdisc_number'
 *       - $ref: '#/components/parameters/btrack_number'
 *       - $ref: '#/components/parameters/album'
 *       #- $ref: '#/components/parameters/artists'
 *       - $ref: '#/components/parameters/duration_ms'
 *       - $ref: '#/components/parameters/baudio_url'
 *       - $ref: '#/components/parameters/type'
 *       responses:
 *         '200':
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Track'
 *
 *
 *
 *
 *
 *
 *   /v1/users/:
 *     get:
 *       summary: te va a mostrar todos los usuaride la BD
 *       tags: [users]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     post:
 *       summary: Agregar usuario
 *       tags: [users]
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *        200:
 *          description: succesfull
 *          content:
 *             application/json:
 *                 schema:
 *                     type: string
 *                     example: "ok"
 *
 *   /v1/users/{id}:
 *
 *     get:
 *       summary: obten usuario de la BD  con ID
 *       tags: [users]
 *       parameters:
 *            - in: path
 *              name: id
 *              schema:
 *               type: string
 *              required: true
 *              description: El Id del usuario
 *              example: "613ec5461ac0e1e15d3a2ea9"
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *     put:
 *       tags:
 *       - users
 *       summary: Actualiza la información
 *       requestBody:
 *         description: Descripcion Request Body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       parameters:
 *       - in: path
 *         name: id
 *         example: "613ec5461ac0e1e15d3a2ea9"
 *         schema:
 *           type: string
 *         required: true
 *         description: id user
 *       responses:
 *         '201':
 *           description: ok
 *#           content:
 *#             application/json:
 *#               schema:
 *#                 $ref: '#/components/schemas/Track'
 *
 *     delete:
 *       summary: elimina usuario de la BD  con ID
 *       tags: [users]
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del usuario
 *       responses:
 *         '200':
 *           description: elimininado exitosamente
 *
 *   /v1/users/count:
 *        get:
 *          summary: te va a mostrar el numero usuarios en  la BD
 *          tags: [users]
 *          responses:
 *            '200':
 *              description: Respuesta exitosa
 *
 *   /v1/users/count/Premium:
 *     get:
 *       summary: te va a mostrar el numero cuentas Premium
 *       tags: [users]
 *       responses:
 *         '200':
 *           description: Respuesta exitosa
 *
 *   /v1/users/count/Basico:
 *      get:
 *        summary: te va a mostrar el numero dcuentasBasico
 *        tags: [users]
 *        responses:
 *          '200':
 *            description: Respuesta exitosa
 *
 *
 *
 *
 *
 * components:
 *   parameters:
 *
 *     limit:
 *       name: limit
 *       in: query
 *       schema:
 *         type: string
 *       description: límite
 *       example: '3'
 *
 *
 *     artists:
 *       name: artists
 *       in: query
 *       schema:
 *         type: string
 *       description: Artista Id
 *       example: '614f84a395dc9f46d43a6d6f'
 *     artist:
 *       name: artist
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre Artista
 *       example: met
 *     name:
 *       name: name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre
 *     discName:
 *       name: discName
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre del disco
 *     year:
 *       name: year
 *       in: query
 *       schema:
 *         type: string
 *       description: Año
 *     label:
 *       name: label
 *       in: query
 *       schema:
 *         type: string
 *       description: Disquera
 *       example: sony
 *     genre:
 *       name: genre
 *       in: query
 *       schema:
 *         type: string
 *       description: Género
 *       example: rock
 *     album_type:
 *       name: album_type
 *       in: query
 *       schema:
 *         type: string
 *       description: Tipo Album
 *     release_date:
 *       name: release_date
 *       in: query
 *       schema:
 *         type: string
 *       description: Lanzamiento
 *     genres:
 *       name: genres
 *       in: query
 *       schema:
 *         type: string
 *       description: Géneros
 *       example: rock
 *     total_tracks:
 *       name: total_tracks
 *       in: query
 *       schema:
 *         type: string
 *       description: Total canciones
 *     tracks:
 *       name: tracks
 *       in: query
 *       schema:
 *         type: string
 *       description: id cancion
 *       example: '614f7f8995dc9f46d43a6d38'
 *     images:
 *       name: images
 *       in: query
 *       schema:
 *         type: string
 *       description: imágenes
 *       example: https
 *     type:
 *       name: type
 *       in: query
 *       schema:
 *         type: string
 *       description: Tipo
 *     nationality:
 *       name: nationality
 *       in: query
 *       schema:
 *         type: string
 *       description: Nacionalidad
 *
 *     artist_name:
 *       name: artist_name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre artista
 *       example: sha
 *     artist_name2:
 *       name: name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre artista
 *       example: sha
 *     place:
 *       name: place
 *       in: query
 *       schema:
 *         type: string
 *       description: Lugar
 *       example: estadio
 *     date:
 *       name: date
 *       in: query
 *       schema:
 *         type: string
 *       description: Fecha
 *     location:
 *       name: location
 *       in: query
 *       schema:
 *         type: string
 *       description: Ubicacion
 *     idartist:
 *       name: artist_name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre artista
 *       example: sha
 *
 *     disc_number:
 *       name: disc_number
 *       in: query
 *       schema:
 *         type: string
 *       description: Numero de Disco
 *       example: '1'
 *
 *     track_number:
 *       name: track_number
 *       in: query
 *       schema:
 *         type: string
 *       description: Numero de Cancion
 *       example: '2'
 *
 *     album:
 *       name: album
 *       in: query
 *       schema:
 *         type: string
 *       description: id Album
 *
 *     duration_ms:
 *       name: duration_ms
 *       in: query
 *       schema:
 *         type: string
 *       description: Duracion Cancion en ms
 *
 *     audio_url:
 *       name: audio_url
 *       in: query
 *       schema:
 *         type: string
 *       description: Url del audio
 *
 *     lon:
 *       name: lon
 *       in: query
 *       schema:
 *         type: string
 *       description: longitud
 *       example: "4.5"
 *     lat:
 *       name: lat
 *       in: query
 *       schema:
 *         type: string
 *       description: latitud
 *       example: "5.5"
 *
 *
 *
 *
 *     baudio_url:
 *       name: audio_url
 *       in: query
 *       schema:
 *         type: string
 *       description: Url del audio
 *       example: true
 *     bdisc_number:
 *       name: disc_number
 *       in: query
 *       schema:
 *         type: string
 *       description: Numero de Disco
 *       example: true
 *
 *     btrack_number:
 *       name: track_number
 *       in: query
 *       schema:
 *         type: string
 *       description: Numero de Cancion
 *       example: true
 *
 *     blocation:
 *       name: location
 *       in: query
 *       schema:
 *         type: string
 *       description: Ubicacion
 *     bdate:
 *       name: date
 *       in: query
 *       schema:
 *         type: string
 *       description: Fecha
 *       example: true
 *     bplace:
 *       name: place
 *       in: query
 *       schema:
 *         type: string
 *       description: Lugar
 *       example: true
 *     bartist_name:
 *       name: artist_name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre artista
 *       example: true
 *
 *     bartists:
 *       name: artists
 *       in: query
 *       schema:
 *         type: string
 *       description: Artista Id
 *
 *     bartist:
 *       name: artist
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre Artista
 *
 *     bname:
 *       name: name
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre
 *       example: met
 *
 *     bdiscName:
 *       name: discName
 *       in: query
 *       schema:
 *         type: string
 *       description: Nombre del disco
 *
 *     byear:
 *       name: year
 *       in: query
 *       schema:
 *         type: string
 *       description: Año
 *
 *     blabel:
 *       name: label
 *       in: query
 *       schema:
 *         type: string
 *       description: Disquera
 *       example: true
 *
 *     bgenre:
 *       name: genre
 *       in: query
 *       schema:
 *         type: string
 *       description: Género
 *
 *     balbum_type:
 *       name: album_type
 *       in: query
 *       schema:
 *         type: string
 *       description: Tipo Album
 *
 *     brelease_date:
 *       name: release_date
 *       in: query
 *       schema:
 *         type: string
 *       description: Lanzamiento
 *       example: "true"
 *
 *     bgenres:
 *       name: genres
 *       in: query
 *       schema:
 *         type: string
 *       description: Géneros
 *
 *     btotal_tracks:
 *       name: total_tracks
 *       in: query
 *       schema:
 *         type: string
 *       description: Total canciones
 *
 *     btracks:
 *       name: tracks
 *       in: query
 *       schema:
 *         type: string
 *       description: id cancion
 *
 *     bimages:
 *       name: images
 *       in: query
 *       schema:
 *         type: string
 *       description: imágenes
 *
 *     btype:
 *       name: type
 *       in: query
 *       schema:
 *         type: string
 *       description: Tipo
 *
 *     bnationality:
 *       name: nationality
 *       in: query
 *       schema:
 *         type: string
 *       description: Nacionalidad
 *       example: true
 *
 *
 *
 *
 *   schemas:
 *     Album:
 *       type: object
 *       properties:
 *         artist:
 *           type: string
 *           example: Metallica Swagger
 *           description: el nombre del artista/banda
 *         discName:
 *           type: string
 *           example: Metalica Album Swagger
 *         year:
 *           type: string
 *           example: "1991"
 *         label:
 *           type: string
 *           example: Sony
 *         genre:
 *           type: string
 *           example: rock
 *         artists:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *           - "614f84a395dc9f46d43a6d6a"
 *           - "6146003f6855a34a4504c470"
 *         name:
 *           type: string
 *           example: Live Metalica Album Swagger VOLUMEN I
 *         album_type:
 *           type: string
 *           example: album
 *         release_date:
 *           type: string
 *           example: "2021-01-01"
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *           - pop
 *           - musical
 *         images:
 *           type: array
 *           items:
 *             type: object
 *           example:
 *           - height: 640
 *             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/1920px-Metallica_wordmark.svg.png"
 *             width: 640
 *           - height: 300
 *             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/1920px-Metallica_wordmark.svg.png"
 *             width: 300
 *           - height: 64
 *             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/1920px-Metallica_wordmark.svg.png"
 *             width: 64
 *         total_tracks:
 *           type: string
 *           example: '2'
 *         tracks:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *           - "614f7f8995dc9f46d43a6cc0"
 *           - "614f7f8995dc9f46d43a6d38"
 *         type:
 *           type: string
 *           example: album
 *
 *     Artist:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: La otra Natalia Lafourcade y Metallica
 *         nationality:
 *           type: string
 *           example: american chilean
 *         year:
 *           type: string
 *           example: "2021"
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *           - pop
 *           - rock
 *         images:
 *           type: array
 *           items:
 *             type: object
 *           example:
 *           - height: 640
 *             url: "https://www.24horas.cl/incoming/a_uno_768596jpg-2312537/ALTERNATES/BASE_LANDSCAPE/A_UNO_768596.jpg"
 *             width: 640
 *           - height: 300
 *             url: "https://www.24horas.cl/incoming/a_uno_768596jpg-2312537/ALTERNATES/BASE_LANDSCAPE/A_UNO_768596.jpg"
 *             width: 300
 *           - height: 64
 *             url: "https://www.24horas.cl/incoming/a_uno_768596jpg-2312537/ALTERNATES/BASE_LANDSCAPE/A_UNO_768596.jpg"
 *             width: 64
 *
 *     Concert:
 *       type: object
 *       properties:
 *         artist:
 *           type: string
 *           example: '614f84a395dc9f46d43a6d6b'
 *         artist_name:
 *           type: string
 *           example: La otra Natalia y Metallica y Shakira
 *         place:
 *           type: string
 *           example: Las Vegas
 *         date:
 *           type: string
 *           example: '22/01/2022'
 *         location:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               enum: [Point]
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 *               minItems: 2
 *               maxItems: 2
 *           example: {type: Point, coordinates: [1,2]}
 *
 *     Track:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Cancion Shakira y Metallica super hit
 *         disc_number:
 *           type: string
 *           example: '1'
 *         track_number:
 *           type: string
 *           example: '1'
 *         album:
 *           type: string
 *           example: '6152116faa58a577e3aea8cc'
 *         artists:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *           - "614f84a395dc9f46d43a6d6b"
 *           - "6146003f6855a34a4504c470"
 *         duration_ms:
 *           type: string
 *           example: '30000'
 *         audio_url:
 *           type: string
 *           example: 'https://p.scdn.co/mp3-preview/cab46242e9caa539386591ba1c096a5a8f7f44d4?cid=d2d6e96fa6ad4f18a282102d9d73f773'
 *         type:
 *           type: string
 *           example: track
 *
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: 'Shakirebeca'
 *         lastName:
 *           type: string
 *           example: 'Ciccone'
 *         age:
 *           type: number
 *           example: 30
 *         status:
 *           type: string
 *           enum: ['Premium', 'Basico']
 *           example: Premium
 *         email:
 *           type: string
 *           example: shaki@gmail.com
 *         password:
 *           type: string
 *           example: holashakira
*/