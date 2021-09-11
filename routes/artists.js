// Estructura del CRUD
const router = require('express').Router()

const {
    newArtist,
    getArtist,
    updateArtist,
    deleteArtist
} = require('../controllers/artists')

router.get('/', newArtist)
router.post('/', getArtist)
router.put('/:id', updateArtist)
router.delete('/:id', deleteArtist)

module.exports = router;
