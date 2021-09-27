/* class Artist {
    constructor(id, name, nationality, year) {
        this.id = id,
        this.name = name,
        this.nationality = nationality,
        this.year = year
    }
}

module.exports = Artist */

const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nationality: { type: String },
    year: { type: Number },
    genres: [{ type: String }],
    images: [{ type: mongoose.Schema.Types.Mixed }],
    type: { type: String }
}, { timestamps: true, collection: 'artists' })

ArtistSchema.methods.publicData = () => {
    return {
        id: this.id,
        name: this.name,
        nationality: this.nationality,
        year: this.year,
        genres: this.genres,
        images: this.images,
        type: this.type
    }
};

mongoose.model("Artist", ArtistSchema)