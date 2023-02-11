const express = require('express');
const app = express();
const consign = require("consign");

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

app.set('view engine', 'ejs');
app.set('views', './app/views');


module.exports = app;