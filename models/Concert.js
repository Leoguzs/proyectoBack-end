/* class Concierto {
    constructor (id, artist, place, date) {
this.id = id,
this.artist = artist,
this.place = place,
this.date = date
    }
}

module.exports = Concierto; */


const mongoose = require('mongoose');

const ConcertSchema = new mongoose.Schema({
    artist: {type: String, required: true},
    place: {type: String, required: true},
    date: {type: String, required:true}
},{timestamps: true, collection: 'concerts'})

ConcertSchema.methods.publicData = ()=>{
    return{
        id: this.id,
        artist: this.artist,
        place: this.place,
        date: this.date
    }
};

mongoose.model("Concert", ConcertSchema)