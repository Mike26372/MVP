// Set up server
var express = require('express');
var app = express();
var port = 3000;

// Require middleware
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var path = require('path');
var morgan = require('morgan');

//Connect to database
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/dreamcatcher');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);

// Set session variables
var sessionVars = {
  secret: 'nyancat',
  cookies: {},
  resave: false,
  saveUninitialized: true
};

// Pass middleware into express
app.use(morgan('dev')); // Log messages for development
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); // Sets headers
app.use(session(sessionVars)); // Easy session authentication

app.use('/compiled', express.static(path.join(__dirname + '/compiled')));
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));
app.use(express.static(path.join(__dirname + '/public')));

// Handle post submission to database
require('./utility/routes.js')(app, express);

// Listen on port 3000
app.listen(port, function(err) {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
