'use strict';

const axios = require('axios');

var api = 'http://www.omdbapi.com/?';
var searchtitle = 't=';
var title = 'Star Trek';
var apikey = '&apikey=f6eeadf6';
var url = api + searchtitle + title + apikey;

async function GetRequest(){
    const Poster = await axios.get(url).then(response => {return response.data.Poster;})
    .catch(function(error){
        console.log(error);
    });

    var jsonobject = {String: Poster};

    return jsonobject;
}

GetRequest().then(result => {console.log( result )})

// axios.get(url).then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(error);
// })

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("This REST API application is working properly.", res);
};

// View all data from table user
exports.displayall = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// View data from table user by id
exports.displaybyid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM user WHERE user_id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

// Insert data to table favorite_music
exports.insertfavorite = function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var user_id = req.body.user_id;

    connection.query('INSERT INTO favorite_movies (id, title, user_id) VALUES(?,?,?)', 
        [id, title, user_id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {
                response.ok("Add data success!", res)
            }
        });
};