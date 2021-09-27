const router = require('express').Router()
const { newConcert,
    getConcert,
    updateConcert,
    deleteConcert,
    getSearch,
    getAll,
    getFields,
    getNearConcert
} = require('../controllers/concerts')

router.get('/searchnear', getNearConcert)
router.get('/search', getSearch);
router.get('/all', getAll);
router.get('/fields', getFields);
router.get('/:id', getConcert)
router.get('/', getConcert)
router.post('/', newConcert)
router.put('/:id', updateConcert)
router.delete('/:id', deleteConcert)

module.exports = router;
