const express = require('express');
const path = require('path');
const router = express.Router();
const mysql = require('mysql');


// SERVER //
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NewPassword',
    database: 'library_information',
    port: '3306'
});

// CONTROLLERS //
var search_con = require('../controllers/search');
const { getinstance_user } = require('../controllers/user');

router.get('/', function(req, res, next) {
    res.render('index', {layout: 'default', template: 'index-template'});
});

router.get('/books', (req, res) => {
    var findall = ('SELECT * from books');
    connection.query(findall, function(err,data,fields){
        if(err) throw err;

        else{
            res.render('bookobj', {layout: 'search', results: data, val: 'All Books'});
        }
    })
});

router.get('/search/', search_con.searchinstance_submit);

router.get('/user/', getinstance_user);

module.exports = router;