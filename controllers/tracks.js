const mongoose = require('mongoose');
const Track = mongoose.model("Track");

function newTrack(req, res, next) {
    var track = new Track(req.body);
    track.save().then(track => {
        res.status(201).send(track)
    }).catch(next);
}

function getTrack(req, res, next) {
    if (req.params.id) {
        Track.findById(req.params.id)
            .then(track => { res.send(track) })
            .catch(next)
    } else {
        Track.find()
            .then(tracks => { res.send(tracks) })
            .catch(next)
    }
}

function updateTrack(req, res, next) {
    Track.findById(req.params.id)
        .then(track => {

            if (!track) { return res.sendStatus(404); }
            let nuevaInf = req.body;
            if (typeof nuevaInf.name !== "undefined")
                track.name = nuevaInf.name
            if (typeof nuevaInf.disc_number !== "undefined")
                track.disc_number = nuevaInf.disc_number
            if (typeof nuevaInf.track_number !== "undefined")
                track.track_number = nuevaInf.track_number
            if (typeof nuevaInf.album !== "undefined")
                track.album = nuevaInf.album
            if (typeof nuevaInf.artists !== "undefined")
                track.artists = nuevaInf.artists
            if (typeof nuevaInf.duration_ms !== "undefined")
                track.duration_ms = nuevaInf.duration_ms
            if (typeof nuevaInf.audio_url !== "undefined")
                track.audio_url = nuevaInf.audio_url
            if (typeof nuevaInf.type !== "undefined")
                track.type = nuevaInf.type
            track.save()
                .then(updated => {
                    res.status(201).json(updated.publicData())
                }).catch(next)
        }).catch(next)
}

function deleteTrack(req, res, next) {
    Track.findOneAndDelete({ _id: req.params.id })
        .then(r => { res.status(200).send("El track se elimino.") })
        .catch(next)
}

module.exports = {
    newTrack,
    getTrack,
    updateTrack,
    deleteTrack
};