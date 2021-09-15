const router = require('express').Router()

const{
    newUser,
getUser,
updateUser,
deleteUser
} = require('../controllers/users')

router.post('/', newUser)
router.delete('/:id', getUser)
router.get('/', updateUser)
router.put('/:id', deleteUser)

module.exports=router;