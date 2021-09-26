let router = require('express').Router();


// WE DEFINE THE BEHAVIPUR OF THE ENDPOINT ROOT
router.get('/', (req, res) => {
    res.send('Welcome to BEDU Music');
});

router.use('/users', require('./users'));
router.use('/artists', require('./artists'));
router.use('/albums', require('./albums'));
router.use('/concerts', require('./concerts'));
router.use('/tracks', require('./tracks'));

//EXPORT NEW ROUTER
module.exports = router;
