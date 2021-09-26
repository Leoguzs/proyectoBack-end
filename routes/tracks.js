const router = require('express').Router();
const {
    newTrack,
    getTrack,
    updateTrack,
    deleteTrack
} = require('../controllers/tracks');

router.post('/', newTrack);
router.get('/:id', getTrack);
router.get('/', getTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);

module.exports = router;