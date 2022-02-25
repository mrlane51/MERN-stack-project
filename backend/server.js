const mongoose = require('mongoose')
const User = require('./user')

mongoose.connect('mongodb://localhost/merndb', () => {
    console.log('connected')
},
e => console.error(e))

async function run() {
    const user = new User({ name: 'tim', age: '42'})
    await user.save()
    console.log('user saved')
}

// run()