const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    height: {
        type: Number,
        required: false
    },
    mass: {
        type: Number,
        required: false
    },
    hairColor: {
        type: String,
        requried: true
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
        required: false
    },
    homeworld: {
        type: String,
        requried: true
    },
    species: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Avatar', AvatarSchema)