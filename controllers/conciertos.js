const Concierto = require('../models/Concierto')

//Funciones CRUD: funcionalidad completa para nuestro controlador

function crearConcierto (req, res) {
    let concierto = new Concierto (req.body);
    res.status(200).send(concierto);
}

function obtenerConcierto (req, res){
    res.send()
}

function modificarConcierto (req, res){
    let concierto = new Concierto(req.params.id)
    let modificaciones = req.body;
    concierto= {...concierto, ...modificaciones}
    res.send(concierto)
}

function eliminarConcierto (req, res){
    res.status(200).send(`El concierto ${req.params.id} se eliminó`)
}

module.exports = {
    crearConcierto,
    obtenerConcierto,
    modificarConcierto,
    eliminarConcierto
}