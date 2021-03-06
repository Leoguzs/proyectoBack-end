const mongoose = require('mongoose');
const Artist = mongoose.model("Artist");

function newArtist(req, res, next) {
    var artist = new Artist(req.body);
    artist.save().then(art => {
        res.status(201).send(art)
    }).catch(next);
}

function getArtist(req, res, next) {
    if (req.params.id) {
        Artist.findById(req.params.id)
            .then(art => { res.send(art) })
            .catch(next)
    } else {
        Artist.find()
            .then(artists => { res.send(artists) })
            .catch(next)
    }
}

function updateArtist(req, res, next) {
    Artist.findById(req.params.id)
        .then(artist => {
            if (!artist) { return res.sendStatus(404); }
            let nuevaInf = req.body;
            if (typeof nuevaInf.name !== "undefined")
                artist.name = nuevaInf.name
            if (typeof nuevaInf.nationality !== "undefined")
                artist.nationality = nuevaInf.nationality
            if (typeof nuevaInf.year !== "undefined")
                artist.year = nuevaInf.year
            if (typeof nuevaInf.genres !== "undefined")
                artist.genres = nuevaInf.genres
            if (typeof nuevaInf.images !== "undefined")
                artist.images = nuevaInf.images
            if (typeof nuevaInf.type !== "undefined")
                artist.type = nuevaInf.type

            artist.save()
                .then(updated => {
                    res.status(201).json(updated.publicData())
                }).catch(next)
        }).catch(next)
}

function deleteArtist(req, res, next) {
    Artist.findOneAndDelete({ _id: req.params.id })
        .then(r => { res.status(200).send("El artista se elimino.") })
        .catch(next)
}

function getSearch(req, res, next) {
    var itemSearch = {};
    Object.keys(Artist.schema.obj).forEach(field => {
        if (field in req.query) {
            itemSearch[field] = req.query[field]
        }
    })

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })
    Artist.find(regex_query)
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
    Artist.find(req.query, null, { limit: qlimit })
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function getFields(req, res, next) {
    var itemSearch = {};

    Object.keys(Artist.schema.obj).forEach(field => {
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

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })

    Artist.find(regex_query, null, { projection: project, ...{ limit: 0 } })
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function artistCount(req, res, next) {
    let name = req.params.nam
    Artist.aggregate([
        { '$match': { 'name': name } },
        { '$count': 'total' }
    ]).then(r => {
        res.status(200).send(r)
    })
        .catch(next)
}


module.exports = {
    newArtist,
    deleteArtist,
    updateArtist,
    getArtist,
    getSearch,
    getAll,
    getFields,
    artistCount
};


