require("dotenv").load();
var express = require('express');
var bodyParser = require('body-parser');

var nfl = require('./routes/nfl');

var app = express();

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/nfl', nfl);

app.listen(process.env.PORT || 3000);
console.log("woot server on 3000");

