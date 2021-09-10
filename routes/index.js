let router = require('express').Router();


// definimos el comportamiento en la raíz del endpoint
router.get('/',(req, res)=>{
res.send('Welcome to BEDU Music');
});

router.use('/usuarios', require('./usuarios'));
router.use('/artistas', require('./artistas'));
router.use('/discos', require('./discos'));
router.use('/conciertos', require('./conciertos'));

//exportamos el nuevo router
module.exports = router;
