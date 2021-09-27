const router = require('express').Router();
const {
    newAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum,
    albumField,
    getSearch,
    getAll,
    getFields
} = require('../controllers/albums');

router.get('/search', getSearch);
router.get('/all', getAll);
router.get('/fields', getFields);
router.get('/match/:art', albumField)
router.get('/:id', getAlbum);
router.get('/', getAlbum);
router.post('/', newAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;
