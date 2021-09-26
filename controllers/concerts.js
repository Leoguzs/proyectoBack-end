const Concierto = require('../models/Concert')
const mongoose = require('mongoose');
const Concert = mongoose.model("Concert")

//Funciones CRUD: funcionalidad completa para nuestro controlador

function newConcert (req, res) {
    var concert = new Concert(req.body);

    concert.save().then(conc => {
         res.status(201).send(conc)
    }).catch(next);
}

function getConcert (req, res){
    if(req.params.id){
            Concert.findById(req.params.id).then(conc => {res.send(conc)}).catch(next)
        }else{
            Concert.find().then(concerts => {res.send(concerts)}).catch(next)
        }
}

function updateConcert (req, res){
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

            concerts.save().then(updated =>{
                res.status(201).json(updated.publicData())
            })
            .catch(next)
        }).catch(next)
}

function deleteConcert (req, res){
    Concert.findOneAndDelete({_id:req.params.id})
    .then(c => {res.status(200).send("El concierto ha sido cancelado")}).catch(next)
}

module.exports = {
    newConcert,
    getConcert,
    updateConcert,
    deleteConcert
}