/*
    TODO: 
        -show genres of books on home page
*/

const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const logger = require('./middleware/logger');
const dbconnect = require('./middleware/dbconnect');
const get_username = require('./middleware/get_user');
const get_checkedbooks = require('./middleware/get_checkedbooks');
//const { options } = require('./routes/router');
//init express app
const app = express();
app.use(express.static(__dirname + '/public'));

//init templating
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

//init middleware
app.use(logger);
//innit auth
app.use('/user/', get_username);
app.use('/user/', get_checkedbooks);
//init get students
//display data

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set routing module
app.use('/', require('./routes/router.js'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server started on port %s', PORT));