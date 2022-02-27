// pulling in the mogoose module
const mongoose = require('mongoose')

// for other nested objects : option 2 instead of inside the first schema
const addressSchema= new mongoose.Schema({
    street: String,
    city: String,
})

// userSchema collection object with fields for the document
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jobTitle: String,
    email: {
        type: String,
        lowercase: true},
    // reference to another user object
    department: String,
    // array of strings
    groups: [String],
    // nested array of objects
    workTime: {
        morning: Boolean,
        afternoon: Boolean,
        overnight: Boolean,
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    // address: addressSchema
})

// model for user documents in our userSchema collection
module.exports = mongoose.model('User', userSchema)

// const users = mongoose.model('Users', userSchema)
// module.exports = users;