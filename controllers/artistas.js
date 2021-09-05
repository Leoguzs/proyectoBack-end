const Artist = require('../models/Artista')

function crearArtist(req, res) {

var artista = new Artist(req.body)
res.status(201).send(artista);
}

function obtenerArtist(req,res) {

var artista1 = new Artist(req.params.id, 'Radiohead', 'UK', 1985, )
}

function modificarArtist(req, res) {

var usuario1 = new Artist(req.params.id, 'Radiohead', 'United Kingdom', 1985)
var modificaciones = req.body
artista1 = { ...artista1, ...modificaciones}
res.send(artista1)
}

function eliminarArtist(req, res) {

res.status(200).send(`El artista ${req.params.id} ha sido eliminado`);
}

module.exports = {
crearArtist,
obtenerArtist,
modificarArtist,
eliminarArtist
}

