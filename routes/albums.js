const router = require('express').Router();
const{
    newAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albums');

router.post('/', newAlbum);
router.get('/', getAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;
