const router = require('express').Router()

const{
    crearUsuario,
    eliminarUsuario,
    obtenerUsuario,
    modificarUsuario
} = require('../controllers/usuarios')

router.post('/', crearUsuario)
router.delete('/:id', eliminarUsuario)
router.get('/', obtenerUsuario)
router.put('/:id', modificarUsuario)
