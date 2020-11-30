const url = 'mongodb+srv://Bao:bao45621@cluster0.oiyzl.mongodb.net/<dbname>?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: url,
    collection: 'sessions'
})

const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const dashboardRoute = require('./routes/dashboard');
const data = require('./routes/data');

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: 'bao123456789',
    resave: false,
    saveUninitialized: false,
    store: store
}));
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/dashboard', dashboardRoute);
app.use('/data', data);

mongoose.connect(url,{useNewUrlParser: true})
    .then(client =>{ console.log("Connection success"); })
    .catch(err => console.error('ERROR CRASHING', err));

app.listen(PORT);