const express = require('express');
const router = express.Router();
const path = require("path"); 
const User = require('../models/user')
let loggedinuser = {};
router.get('/', (req, res) => {
    const user = req.session.user;

    
    if (user == undefined) //if not logged in, redirect to login page
        return res.redirect('/index');

    res.sendFile(path.join(__dirname + '/../tables.html'));
});
//logout button
router.post('/Logout', (req, res) => {
    req.session.destroy(); 
    
    res.redirect('/index') 
})

router.post('/Input', (req, res) => {

    let newUserData = req.session.user.userData;
    newUserData.date.push(req.body.Date);
    newUserData.activity.push(req.body.Activity);
    newUserData.weight.push(req.body.Weight);
    newUserData.minutes.push(req.body.Minutes);
    newUserData.caloriesIn.push(req.body.CaloriesIn);
    newUserData.caloriesOut.push(req.body.CaloriesOut);

    User.findByIdAndUpdate({_id: req.session.user._id}, {userData: req.session.user.userData}, {useFindAndModify:true}, function(err, res) {
        if (err)
            console.log('err, ID not found', err);
        else
            console.log('successfully updated id');
    });

    res.redirect('/tables') 
})
module.exports = router;