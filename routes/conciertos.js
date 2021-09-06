const router = require('express').Router()
const {crearConcierto,
    obtenerConcierto,
    modificarConcierto,
    eliminarConcierto
} = require ('../controllers/conciertos')

router.get('/', obtenerConcierto)
router.post('/', crearConcierto)
router.put('/:id', modificarConcierto)
router.delete('/:id', eliminarConcierto)

module.exports=router;
