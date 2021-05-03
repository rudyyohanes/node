const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

// // Parse application/json
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// // Call routes
// var routes = require('./routes');
// routes(app);

const port = process.env.PORT_APP || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});