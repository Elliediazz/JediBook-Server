const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    mass: {
        type: String,
        required: true
    },
    hairColor: {
        type: String,
        requried: false
    },
    eyeColor: {
        type: String,
        required: true
    },
    birthYear: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    homeworld: {
        type: String,
        requried: false
    },
    species: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Avatar', AvatarSchema)