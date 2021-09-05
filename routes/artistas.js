// Estructura del CRUD
const router = require('express').Router()

const {
crearArtist,
obtenerArtist,
modificarArtist,
eliminarArtist
} = require('../controllers/artistas')

router.get('/', obtenerArtist)
router.post('/', crearArtist)
router.put('/', modificarArtist)
router.delete('/:id', eliminarArtist)

module.exports = router;