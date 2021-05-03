'use strict';

module.exports = function (app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/view')
        .get(myjson.displayall);

    app.route('/view/:id')
        .get(myjson.displaybyid);
};