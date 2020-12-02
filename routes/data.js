const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //let output = 'Date ' + req.session.user.userData.date;
    //output += '<br> Activity' + req.session.user.userData.activity;
    //output += '<br> Weight' + req.session.user.userData.weight;
    //output += '<br> Minutes' + req.session.user.userData.minutes;
    //output += '<br> Calories In' + req.session.user.userData.caloriesIn;
    //output += '<br> Calories Out' + req.session.user.userData.caloriesOut;

    let output = req.session.user;
    res.send(output);
});

module.exports = router;
