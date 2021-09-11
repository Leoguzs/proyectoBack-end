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
    name: {type: String, required: true},
    nationality: {type: String},
    year: {type: Number}
},{timestamps: true, collection: 'artists'})

ArtistSchema.methods.publicData = ()=>{
    return{
        id: this.id,
        name: this.name,
        nationality: this.nationality,
        year: this.year
    }
};

mongoose.model("Artista", ArtistSchema)