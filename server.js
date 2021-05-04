const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('lib'));
app.set('view engine', 'ejs');
app.use(session({
    'secret': 'cookie_secret',
    'resave': true,
    'saveUninitialized': true
}));

// Call routes
var routes = require('./routes');
routes(app);

const port = process.env.PORT_APP || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

var pino = require('express-pino-logger');
app.use(pino);