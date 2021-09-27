// Estructura del CRUD
const router = require('express').Router()

const {
    newArtist,
    deleteArtist,
    updateArtist,
    getArtist,
    getSearch,
    getAll,
    getFields
} = require('../controllers/artists')

router.get('/search', getSearch);
router.get('/all', getAll);
router.get('/fields', getFields);
router.get('/:id', getArtist)
router.get('/', getArtist)
router.post('/', newArtist)
router.put('/:id', updateArtist)
router.delete('/:id', deleteArtist)

module.exports = router;
