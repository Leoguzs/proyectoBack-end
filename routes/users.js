const router = require('express').Router()

const{
    newUser,
getUser,
updateUser,
deleteUser,
newSesion,
count
} = require('../controllers/users')

const auth = require('./auth')

router.get('/', auth.required, getUser)
router.get('/count/:st', auth.required, count)
router.get('/:id', auth.required, getUser)
router.post('/', newUser)
router.post('/enter', newSesion)
router.put('/:id', auth.required, updateUser)
router.delete('/:id', auth.required, deleteUser)

module.exports=router;