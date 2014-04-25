
// Setup

var express  = require('express');
var app 	 = express();
var mongoose = require('mongoose');

// Config

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uw03mypu');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Listen

app.listen(8080);
console.log("App listening on port 8080.");