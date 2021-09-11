const router = require('express').Router()
const {newConcert,
    getConcert,
    updateConcert,
    deleteConcert
} = require ('../controllers/concerts')

router.get('/', newConcert)
router.post('/', getConcert)
router.put('/:id', updateConcert)
router.delete('/:id', deleteConcert)

module.exports=router;
