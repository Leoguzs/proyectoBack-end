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
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    artist_name: { type: String },
    place: { type: String, required: true },
    date: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, { timestamps: true, collection: 'concerts' })

ConcertSchema.methods.publicData = () => {
    return {
        id: this.id,
        artist: this.artist,
        artist_name: this.artist_name,
        place: this.place,
        date: this.date,
        location: this.location
    }
};

mongoose.model("Concert", ConcertSchema)