const mongoose = require('mongoose');

// creating userSchema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    imgpath: {
        type: String,
        required: true
    },
    date: {
        type:Date
    }
});

// creating model
const users = new mongoose.model("users", userSchema)
module.exports = users;