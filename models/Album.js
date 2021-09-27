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
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: false }],
    artist: { type: String, required: false },
    name: { type: String, required: false },
    discName: { type: String, required: false },
    year: { type: String, required: false },
    label: { type: String, required: false },
    genre: { type: String, required: false },
    album_type: { type: String, required: false },
    release_date: { type: String, required: false },
    genres: [{ type: String, required: false }],
    images: [{ type: mongoose.Schema.Types.Mixed, required: false }],
    total_tracks: { type: String, required: false },
    tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track', required: false }],
    type: { type: String, required: false }
}, { timestamps: true, collection: 'albums' })


AlbumSchema.methods.publicData = () => {
    return {
        id: this.id,
        artist: this.artist,
        artists: this.artists,
        name: this.name,
        discName: this.discName,
        year: this.year,
        label: this.label,
        genre: this.genre,
        album_type: this.album_type,
        release_date: this.release_date,
        genres: this.genres,
        images: this.images,
        total_tracks: this.total_tracks,
        tracks: this.tracks,
        type: this.type
    }
};

mongoose.model("Album", AlbumSchema)
