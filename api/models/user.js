const mongoose = require('mongoose');

const User = mongoose.Schema({
    "name": String,
    "email": {type: String, unique:true},
    "telephone": String,
    "address": String,
    "password": String,
    "photo": String,
    "admin": Boolean
})
module.exports = mongoose.model('UserSchema', User)
