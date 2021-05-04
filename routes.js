'use strict';

module.exports = function (app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/view')
        .get(myjson.displayall);

    app.route('/movies/:title')
        .get(myjson.returnposterurl);

    app.route('/movies/favorite')
        .post(myjson.insertfavorite);
};