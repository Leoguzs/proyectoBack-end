const mongoose = require('mongoose');
const Track = mongoose.model("Track");

function newTrack(req, res, next) {
    var track = new Track(req.body);
    track.save().then(track => {
        res.status(201).send(track)
    }).catch(next);
}

function getTrack(req, res, next) {
    const pop_artist = { path: 'artists', select: 'name' }
    const pop_album = { path: 'album', select: 'name' }

    if (req.params.id) {
        Track.findById(req.params.id)
            .populate(pop_artist)
            .populate(pop_album)
            .then(track => { res.send(track) })
            .catch(next)
    } else {
        Track.find()
            .populate(pop_artist)
            .populate(pop_album)
            .then(track => { res.send(track) })
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

function getSearch(req, res, next) {

    const Track = mongoose.model("Track");
    //const Artist = mongoose.model("Artist");

    var itemSearch = {};
    Object.keys(Track.schema.obj).forEach(field => {
        if (field in req.query) {
            itemSearch[field] = req.query[field]
        }
    })

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })
    Track.find(regex_query).populate('artists')
        .then(r => { res.status(200).send(r) })
        .catch(next)

}


function getAll(req, res, next) {
    var qlimit;

    if (!req.query.limit || !+req.query.limit || Number(req.query.limit) < 1) {
        qlimit = 0;
        delete req.query.limit;
    } else {
        qlimit = Number(req.query.limit);
        delete req.query.limit;
    }
    Track.find(req.query, null, { limit: qlimit }).populate('artists')
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function getFields(req, res, next) {
    const Concert = mongoose.model("Concert");

    Concert.find({
        "location":
        {
            "$nearSphere":
            {
                "$geometry": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lng), parseFloat(req.query.lat)]
                },
                //"$minDistance": 0,
                //"$maxDistance": 0
            }
        }
    }
    ).populate('artist').then(r => { res.status(200).send(r) })
        .catch(next)
    /*
    var itemSearch = {};
    Object.keys(Track.schema.obj).forEach(field => {
        if (field in req.query) {
            itemSearch[field] = req.query[field]
        }
    });

    var project = {};
    Object.keys(itemSearch).forEach(field => {
        if (itemSearch[field].toString().toLowerCase() !== 'false') {
            project[field] = 1;
        }
        if (itemSearch[field].toString().toLowerCase() === 'true') {
            delete itemSearch[field];
        }
    })
    var arti = 'artists';
    if (!req.query.artists) {
        arti = ''
    }
    Track.find(itemSearch, null, { projection: project, ...{ limit: 0 } }).populate(arti)
        .then(r => { res.status(200).send(r) })
        .catch(next)
        */
}


module.exports = {
    newTrack,
    getTrack,
    updateTrack,
    deleteTrack,
    getSearch,
    getAll,
    getFields
};