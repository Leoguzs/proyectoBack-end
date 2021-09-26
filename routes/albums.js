const router = require('express').Router();
const {
    newAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum,
    albumField
} = require('../controllers/albums');

router.post('/', newAlbum);
router.get('/', getAlbum);
router.get('/:id', getAlbum);
router.get('/match/:art', albumField )
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;
