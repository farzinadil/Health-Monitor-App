const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', (req, res) => {
    res.render('forgotPassword', {
        UserDoesNotExist: req.flash('UserDoesNotExist')});
});

//user presses Register button from login page, redirect to register page
router.post('/forgotPassword', (req, res) => {
    User.findOne({username: req.body.username}, (err,user) => {
        if (!user) //user does not exists in system
        {
            req.flash('UserDoesNotExist', 'User does not exist');
            req.session.save(function() {
                res.redirect('/forgotPassword');
            });
        }
        else
        {
            //save the current user's username, security question & answers to display later
            req.session.username = req.body.username;
            req.session.securityQuestion = user.securityQuestion;
            req.session.securityAnswer = user.securityAnswer;
            res.redirect('/securityQuestion') 
        }
    });
})

module.exports = router;
