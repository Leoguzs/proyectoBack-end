const mongoose = require('mongoose');
const Album = mongoose.model("Album");

function newAlbum(req, res, next) {
    var album = new Album(req.body);
    album.save().then(alb => {
        res.status(201).send(alb)
    }).catch(next);
}

function getAlbum(req, res, next) {
    if (req.params.id) {
        Album.findById(req.params.id)
            .then(alb => { res.send(alb) })
            .catch(next)
    } else {
        Album.find()
            .then(albums => { res.send(albums) })
            .catch(next)
    }
}

function updateAlbum(req, res, next) {
    Album.findById(req.params.id)
        .then(album => {
            if (!album) { return res.sendStatus(404); }
            let nuevaInf = req.body;
            if (typeof nuevaInf.artist !== "undefined")
                album.artist = nuevaInf.artist
            if (typeof nuevaInf.discName !== "undefined")
                album.discName = nuevaInf.discName
            if (typeof nuevaInf.year !== "undefined")
                album.year = nuevaInf.year
            if (typeof nuevaInf.label !== "undefined")
                album.label = nuevaInf.label
            if (typeof nuevaInf.genre !== "undefined")
                album.genre = nuevaInf.genre

            if (typeof nuevaInf.artists !== "undefined")
                album.artists = nuevaInf.artists
            if (typeof nuevaInf.name !== "undefined")
                album.name = nuevaInf.name
            if (typeof nuevaInf.album_type !== "undefined")
                album.album_type = nuevaInf.album_type
            if (typeof nuevaInf.release_date !== "undefined")
                album.release_date = nuevaInf.release_date
            if (typeof nuevaInf.genres !== "undefined")
                album.genres = nuevaInf.genres
            if (typeof nuevaInf.images !== "undefined")
                album.images = nuevaInf.images
            if (typeof nuevaInf.total_tracks !== "undefined")
                album.total_tracks = nuevaInf.total_tracks
            if (typeof nuevaInf.tracks !== "undefined")
                album.tracks = nuevaInf.tracks
            if (typeof nuevaInf.type !== "undefined")
                album.type = nuevaInf.type

            album.save()
                .then(updated => {
                    res.status(201).json(updated.publicData())
                }).catch(next)
        }).catch(next)
}

function deleteAlbum(req, res, next) {
    Album.findOneAndDelete({ _id: req.params.id })
        .then(r => { res.status(200).send("El album se elimino.") })
        .catch(next)
}

function albumField(req, res, next) { /* counts total users */
    let artist = req.params.art
    Album.aggregate([
        {
            '$match': {
                'artist': artist
            }
        },
        { '$count': 'total' }
    ]).then(r => {
        res.status(200).send(r)
    }).catch(next)
}

function getSearch(req, res, next) {
    var itemSearch = {};
    Object.keys(Album.schema.obj).forEach(field => {
        if (field in req.query) {
            itemSearch[field] = req.query[field]
        }
    })

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })
    Album.find(regex_query).populate('artists').populate('tracks')
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
    Album.find(req.query, null, { limit: qlimit }).populate('artists').populate('tracks')
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function getFields(req, res, next) {
    var itemSearch = {};

    Object.keys(Album.schema.obj).forEach(field => {
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
    var trac = 'tracks';
    if (!req.query.tracks) {
        trac = ''
    }

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })

    Album.find(regex_query, null, { projection: project, ...{ limit: 0 } }).populate(arti).populate(trac)
        .then(r => { res.status(200).send(r) })
        .catch(next)
}


module.exports = {
    newAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum,
    albumField,
    getSearch,
    getAll,
    getFields
};
