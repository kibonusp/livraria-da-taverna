const mongoose = require('mongoose');

const Produto = mongoose.Schema({
    "name": {type: String, unique: true},
    "author": [{type: String}],
    "description": String,
    "genders": [{type: mongoose.Schema.Types.ObjectId}],
    "cover": String,
    "price": String,
    "available": Number,
    "sold": Number
})

module.exports = mongoose.model('ProdutoSchema', Produto)