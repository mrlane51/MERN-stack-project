const express = require('express');
const router = express.Router()
// imports model to make requests to it
const User = require('../models/User')

// GET all route
router.get('/', async (req, res) => {
    try {
        // getting all users in the model
        const users = await User.find()
        res.json(users)
    } catch (err) {
        // 500 code : server/db error
        res.status(500).json({ message: err.message })
    }
})

// GET one route
router.get('/user/:id', function (req, res) {
    res.send('test get one')

})

// CREATE one route
router.post('/', function (req, res) {
    res.send('test create')
})

// UPDATE ONE route (patch only updates partial data)
router.patch('/user/:id', function (req, res) {
    res.send('test patch/put')
})
// DELETE one route
router.delete('/user/:id', function (req, res) {
    res.send('test delete')
})

// router.use((req, res) => {
// return res.send('User Route');
// });

module.exports = router;