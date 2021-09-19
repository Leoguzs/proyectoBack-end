const mongoose = require('mongoose');
const Album = mongoose.model("Mascota");

function newAlbum(req, res){
    var album = new Album(req.body);
    album.save().then(alb => {
         res.status(201).send(alb)
    }).catch(next);
}

function getAlbum(req, res){
    if(req.params.id){
        Album.findById(req.params.id)
        .then(alb => {res.send(alb)})
        .catch(next)
    }else{
        Album.find()
        .then(albums => {res.send(albums)})
        .catch(next)
    }
}

function updateAlbum(req, res){
    Album.findById(req.params.id)
    .then(album => {
        if(!album){ return res.sendStatus(404); }
        let nuevaInf = req.body;
        if(typeof nuevaInf.artist !== "undefined")
            album.artist = nuevaInf.artist
        if(typeof nuevaInf.discName !== "undefined")
            album.discName = nuevaInf.discName
        if(typeof nuevaInf.year !== "undefined")
            album.year = nuevaInf.year
        if(typeof nuevaInf.label !== "undefined")
            album.label = nuevaInf.label
        if(typeof nuevaInf.genre !== "undefined")
            album.genre = nuevaInf.genre
        album.save()
        .then(updated => {
            res.status(201).json(updated.publicData())
        }).catch(next)
    }).catch(next)
}

function deleteAlbum (req, res){
    Album.findOneAndDelete({_id:req.params.id})
    .then(r => {res.status(200).send("El album se elimino.")})
    .catch(next)
}

module.exports = {
    newAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum
};
