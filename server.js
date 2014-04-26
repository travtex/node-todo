
// Setup

var express  = require('express');
var app 	 = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;

var database = require('./config/database');

mongoose.connect(database.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});
	
// Listen
require('./app/routes')(app);

app.listen(port);
console.log("App listening on port " + port);