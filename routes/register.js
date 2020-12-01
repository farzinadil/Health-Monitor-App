const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require("path"); 
const User = require('../models/user')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../register.html'));
});

router.post('/Register', (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer
    });
    user.save()
    .then(res => {
        console.log('successfully created user');
    })
    .catch(err =>{
        console.log('err', err);
    });
    res.redirect('/index');
})

module.exports = router;