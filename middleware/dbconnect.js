const express = require('express');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_information'
});

connection.connect(function (error) {
    if (error) {

    }
    else {
        console.log("connected");
    }
});

module.exports = connection;