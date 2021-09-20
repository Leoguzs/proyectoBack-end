const router = require('express').Router()

const{
    newUser,
getUser,
updateUser,
deleteUser
} = require('../controllers/users')

router.post('/', newUser)
router.delete('/:id', deleteUser)
router.get('/', getUser )
router.put('/:id', updateUser)

module.exports=router;