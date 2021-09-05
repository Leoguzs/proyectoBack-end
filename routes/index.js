const { route } = require('./usuarios');

// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/',(req, res)=>{
res.send('Welcome to BEDU Music');
});

router.use('/usuarios', require('./usuarios'));
router.use('/artistas', require('./artistas'));

//exportamos el nuevo router
module.exports = router;
