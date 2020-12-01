const express = require('express');
const router = express.Router();
const path = require("path") 
const User = require('../models/user')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

//user presses Register button from login page, redirect to register page
router.post('/index', (req, res) => {
    User.findOne({username: req.body.username, password:req.body.password}, (err,user) => {
        if(err) {   //server error cannot fufill request
            console.log(err);
            return res.status(500).send();
        }
        if (!user)  //invalid user/password entered
        {
            console.log('404');
            return res.redirect('/index');
        }   
        //store the user in the session redirect to tables
        req.session.user = user;
        return res.redirect('/tables');
    })
})

//user presses Register button from login page, redirect to register page
router.post('/RegisterRedirect', (req, res) => {
    res.redirect('/Register') 
})

module.exports = router;