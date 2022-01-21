const mongoose = require('mongoose');


var schemea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schemea);

module.exports = Userdb;