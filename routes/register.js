const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require("path"); 
const User = require('../models/user')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/register.html'));
});

router.post('/Register', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    });
    user.save()
    .then(res => {
        console.log('successfully created user');
    })
    .catch(err =>{
        console.log('err', err);
    });
    res.redirect('/login');
})

module.exports = router;
