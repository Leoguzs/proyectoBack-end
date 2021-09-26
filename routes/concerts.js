const router = require('express').Router()
const {newConcert,
    getConcert,
    updateConcert,
    deleteConcert
} = require ('../controllers/concerts')

router.get('/', getConcert)
router.get('/:id', getConcert)
router.post('/', newConcert)
router.put('/:id', updateConcert)
router.delete('/:id', deleteConcert)

module.exports=router;
