const mongoose = require('mongoose');
const Artist = mongoose.model("Artist");

function newArtist(req, res, next){
    var artist = new Artist(req.body);
    artist.save().then(art => {
         res.status(201).send(art)
    }).catch(next);
}

function getArtist(req, res, next){
    if(req.params.id){
        Artist.findById(req.params.id)
        .then(art => {res.send(art)})
        .catch(next)
    }else{
        Artist.find()
        .then(artists => {res.send(artists)})
        .catch(next)
    }
}

function updateArtist(req, res, next){
    Artist.findById(req.params.id)
    .then(artist => {
        if(!artist){ return res.sendStatus(404); }
        let nuevaInf = req.body;
        if(typeof nuevaInf.name !== "undefined")
            artist.name = nuevaInf.name
        if(typeof nuevaInf.nationality !== "undefined")
            artist.nationality = nuevaInf.nationality
        if(typeof nuevaInf.year !== "undefined")
            artist.year = nuevaInf.year
    
        artist.save()
        .then(updated => {
            res.status(201).json(updated.publicData())
        }).catch(next)
    }).catch(next)
}

function deleteArtist (req, res, next){
    Artist.findOneAndDelete({_id:req.params.id})
    .then(r => {res.status(200).send("El artista se elimino.")})
    .catch(next)
}


module.exports = {
   newArtist,
   deleteArtist,
   updateArtist,
   getArtist
};


