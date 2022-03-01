// pulling in the mogoose module
const mongoose = require('mongoose')

// for other nested objects : option 2 instead of inside the first schema
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

// userSchema collection object with fields for the document
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // username must be at least 5 chars
        minLength: 5
    },
    jobTitle: String,
    email: {
        type: String,
        lowercase: true
    },
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

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
    .virtual('fullName')
    // Getter
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    // Setter to set the first and last name
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
    });


// model for user documents in our userSchema collection
module.exports = mongoose.model('User', userSchema)