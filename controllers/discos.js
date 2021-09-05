const Disco = require('../models/Disco');

function crearDisco(req, res){
    var disco = new Disco(req.body);
    res.status(201).send(disco);
}

function obtenerDiscos(req, res){
    var disco1 = new Disco(1, "The Weeknd", "Blinding Lights", "2019", "XO", "Synthwave synth-pop electropop");
    var disco2 = new Disco(2, "Post Malone", "Circles", "2019", "republic records", "Pop rock soft rock downtempo hip hop");
    res.send([disco1, disco2]);
}

function modificarDisco(req, res){
    var disco1 = new Disco(req.params.id, "The Weeknd", "Blinding Lights", "2019", "XO records", "electropop");
    var modidicaciones = req.body;
    disco1 = { ...disco1, ...modidicaciones };
    res.send(disco1);
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