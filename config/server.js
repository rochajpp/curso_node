const express = require('express');
const app = express();
const consign = require("consign");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());



consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;