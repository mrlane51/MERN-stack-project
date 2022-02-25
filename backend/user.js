// pulling in the mogoose module
const mongoose = require('mongoose')

// userSchema collection object with fields for the document
const userSchema = new mongoose.Schema({
    // fields aka key: value pairs
    name: String,
    age: Number,
    jobTitle: String
})

// model for user documents in our userSchema collection
const users = mongoose.model('users', userSchema)


module.exports = users;