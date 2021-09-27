const Concierto = require('../models/Concert')
const mongoose = require('mongoose');
const Concert = mongoose.model("Concert")

//Funciones CRUD: funcionalidad completa para nuestro controlador

function newConcert(req, res, next) {
    var concert = new Concert(req.body);

    concert.save().then(conc => {
        res.status(201).send(conc)
    }).catch(next);
}

function getConcert(req, res, next) {
    if (req.params.id) {
        Concert.findById(req.params.id).then(conc => { res.send(conc) }).catch(next)
    } else {
        Concert.find().then(concerts => { res.send(concerts) }).catch(next)
    }
}

function updateConcert(req, res, next) {
    Concert.findById(req.concert.id)
        .then(concerts => {
            if (!concerts) {
                return res.sendStatus(401);
            }
            let cambiarInfo = req.body
            if (typeof cambiarInfo.artist !== "undefined")
                concerts.artist = updatedInfo.artist
            if (typeof cambiarInfo.place !== "undefined")
                concerts.place = updatedInfo.place
            if (typeof cambiarInfo.date !== "undefined")
                concerts.date = cambiarInfo.date
            if (typeof cambiarInfo.artist_name !== "undefined")
                concerts.artist_name = cambiarInfo.artist_name
            if (typeof cambiarInfo.location !== "undefined")
                concerts.location = cambiarInfo.location

            concerts.save().then(updated => {
                res.status(201).json(updated.publicData())
            })
                .catch(next)
        }).catch(next)
}

function deleteConcert(req, res, next) {
    Concert.findOneAndDelete({ _id: req.params.id })
        .then(c => { res.status(200).send("El concierto ha sido cancelado") }).catch(next)
}

function getSearch(req, res, next) {
    var itemSearch = {};
    Object.keys(Concert.schema.obj).forEach(field => {
        if (field in req.query) {
            itemSearch[field] = req.query[field]
        }
    })

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })
    Concert.find(regex_query).populate('artist')
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
    Concert.find(req.query, null, { limit: qlimit }).populate('artist')
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function getFields(req, res, next) {
    var itemSearch = {};

    Object.keys(Concert.schema.obj).forEach(field => {
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
    if (!req.query.artist) {
        arti = ''
    }

    var regex_query = {}
    Object.keys(itemSearch).forEach(field => { regex_query[field] = { "$regex": req.query[field], "$options": 'i' } })

    Concert.find(regex_query, null, { projection: project, ...{ limit: 0 } }).populate(arti)
        .then(r => { res.status(200).send(r) })
        .catch(next)
}

function getNearConcert(req, res, next) {
    Concert.find({
        "location":
        {
            "$nearSphere":
            {
                "$geometry": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lon), parseFloat(req.query.lat)]
                },
                //"$minDistance": 0,
                //"$maxDistance": 0
            }
        }
    }
    ).populate('artist').then(r => { res.status(200).send(r) })
        .catch(next)
}

function totalConcerts(req, res, next) {
    let artist = req.params.art
    Concert.aggregate([
        { '$match': { 'artist': artist } },
        { '$count': 'total' }
    ]).then(r => {
        res.status(200).send(r)
    })
        .catch(next)
}

module.exports = {
    newConcert,
    getConcert,
    updateConcert,
    deleteConcert,
    getSearch,
    getAll,
    getFields,
    getNearConcert,
    totalConcerts
}