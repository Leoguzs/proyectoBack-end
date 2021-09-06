const router = require('express').Router();
const{
    crearDisco,
    obtenerDiscos,
    modificarDisco,
    eliminarDisco
} = require('../controllers/discos');

router.post('/', crearDisco);
router.get('/', obtenerDiscos);
router.put('/:id', modificarDisco);
router.delete('/:id', eliminarDisco);

module.exports = router;
