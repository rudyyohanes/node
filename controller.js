'use strict';

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