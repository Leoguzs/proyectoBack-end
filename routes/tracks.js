const router = require('express').Router();
const {
    newTrack,
    getTrack,
    updateTrack,
    deleteTrack,
    getSearch,
    getAll,
    getFields
} = require('../controllers/tracks');

router.get('/search', getSearch);
router.get('/all', getAll);
router.get('/fields', getFields);
router.get('/:id', getTrack);
router.get('/', getTrack);
router.post('/', newTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);

module.exports = router;