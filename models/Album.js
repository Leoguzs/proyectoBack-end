// class Disco {
//     constructor (id, artist, discName, year, label, genre) {
//         this.id = id, 
//         this.artist = artist,
//         this.discName = discName,
//         this.year = year,
//         this.label = label,
//         this.genre = genre
//     }
// }

// module.exports = Disco;


const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    artist: { type: String, required: true },
    discName: { type: String, required: false },
    year: { type: String, required: true },
    label: { type: String, required: false },
    genre: { type: String, required: false }
}, { timestamps: true, collection: 'albums' })


AlbumSchema.methods.publicData = () => {
    return {
        id: this.id,
        artist:this.artist,
        discName:this.discName,
        year:this.year,
        label:this.label,
        genre:this.genre
    }
};

mongoose.model("Album", ArtistSchema)
