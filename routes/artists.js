// Estructura del CRUD
const router = require('express').Router()

const {
    newArtist,
   deleteArtist,
   updateArtist,
   getArtist
} = require('../controllers/artists')

router.get('/', getArtist)
router.get('/:id', getArtist)
router.post('/', newArtist)
router.put('/:id', updateArtist)
router.delete('/:id', deleteArtist)

module.exports = router;
