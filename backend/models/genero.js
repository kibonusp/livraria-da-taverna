const mongoose = require('mongoose')

const Genero = mongoose.Schema({
    "name": {type: String, unique: true},
    "icon": String
})

module.exports = mongoose.model('GeneroSchema', Genero)