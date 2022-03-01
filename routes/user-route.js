const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect('mongodb://localhost/merndb', () => {
    console.log('connected')
},
    e => console.error(e))

async function run() {
    try {
    const user = await User.create({
        name: 'jill doe',
        jobTitle: 'sales manager',
        email: 'jill41@mern.com',
        department: 'sales',
        groups: ['managers', 'sales team'],
        workTime: {
            morning: true,
            afternoon: true,
            overnight: false
        }
    })
    console.log(user)
    // catch errors if input type doesnt match
    } catch (e) {
        console.log(e.message)
    }
}
run()


// Router.get('/findall', (req, res) => {
//     User.find({}, (err, result) => {
//         if (result) {
//             res.status(200).json(result);
//         } else {
//             console.log('Uh Oh, something went wrong');
//             res.status(500).json({ message: 'something went wrong' });
//         }
//     })
// })
