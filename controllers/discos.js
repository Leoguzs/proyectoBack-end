const Disco = require('../models/Disco');

function crearDisco(req, res){
    var disco = new Disco(...req.body);
    res.status(200).send(disco);
}

function obtenerDiscos(req, res){
    var disco1 = new Disco(1, "The Weeknd", "Blinding Lights", "2019", "XO", "synth-pop");
    var disco2 = new Disco(2, "Post Malone", "Circles", "2019", "republic records", "soft-rock");
    res.send([disco1, disco2]);
}

function modificarDisco(req, res){
    var disco = new Disco(req.params.id, "The Weeknd", "Blinding Lights", "2019", "XO", "synth-pop");
    var modidicaciones = req.body;
    disco = { ...disco, ...modidicaciones };
    res.send(disco);
}

function eliminarDisco(req, res){
    res.status(200).send(`Disco ${req.params.id} eliminado`);
}

module.exports = {
    crearDisco,
    obtenerDiscos,
    modificarDisco,
    eliminarDisco
};
