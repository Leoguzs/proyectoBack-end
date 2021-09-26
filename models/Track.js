const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    disc_number: { type: String, required: false },
    track_number: { type: String, required: true },
    album: { type: mongoose.Schema.Types.ObjectId, required: true },
    artists: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
    duration_ms: { type: String, required: true },
    audio_url: { type: String, required: true },
    type: { type: String, required: true }
}, { timestamps: true, collection: 'tracks' })


TrackSchema.methods.publicData = () => {
    return {
        name: this.name,
        disc_number: this.disc_number,
        track_number: this.track_number,
        album: this.album,
        artists: this.artists,
        duration_ms: this.duration_ms,
        audio_url: this.audio_url,
        type: this.type
    }
};

mongoose.model("Track", TrackSchema)
