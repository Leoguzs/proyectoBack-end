const Usuario = require('../models/Usuario');

function crearUsuario(req, res) {
    var Usuario = new Usuario(req.Usuario)
    res.status(201).send(Usuario)
}

function eliminarUsuario(req, res) {
    res.status(200).send('El Usuario: ${req.params} ha sido eliminado con exito');
}

function obtenerUsuario(req,res) {
    var Usuario1 = new Usuario(req.params.id, 'Ivan','Garcia', 20, 'Premium','ih198657@gmail.com', '*******')
    res.send([Usuario1])
}

function modificarUsuario(req,res) {
    var Usuario1 = new Usuario(req.params.id, 'Ivan', 'Garcia',20,'Premium','ih586@gmail', '***', )
    var modificaciones = req.body
    usuario1 = {...usuario1, ...modificaciones}
    res.send(usuario1)
}

module.exports ={
    crearUsuario,
    eliminarUsuario,
    obtenerUsuario,
    modificarUsuario
}