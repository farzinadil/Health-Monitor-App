const mongoose = require('mongoose');
const express = require('express');
//for use of reading user's action 
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');

// const db, logins;

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
let url = mongourl;

MongoClient.connect(url, {useUnifiedTopology: true})
    .then(client => { 
        console.log('connected'); 
        const db = client.db('HealthApp');
        const logins = db.collection('Login');

        //-----------------Routes----------------------------------

        //login page
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/login.html');
        });

        //register page
        app.get('/Register', (req, res) => {
            res.sendFile(__dirname + '/register.html');
        });

        //register page
        app.get('/Dashboard', (req, res) => {
            res.sendFile(__dirname + '/Dashboard.html');
        });

        //-----------------Routes----------------------------------

        app.post('/Login', (req, res) => {
            res.redirect('/Dashboard');
            console.log()
        })
        
        //when the user press the login button
        app.post('/Register', (req, res) => {
             logins.insertOne(req.body)
             .then(result => console.log(result))
             .catch(error => console.error(error))
             res.redirect('/');
        })

        //when the user press the register button from login page
        app.post('/RegisterRedirect', (req, res) => {
            res.redirect('/Register') //redirect to register page
       })

        app.listen(PORT, ()=> {console.log("listening")});
    })
    .catch(err => console.error(err));
