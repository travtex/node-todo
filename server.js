
// Setup

var express  = require('express');
var app 	 = express();
var mongoose = require('mongoose');

// Config

mongoose.connect('mongodb://travtex:paradigm@novus.modulusmongo.net:27017/ubohE9ry');

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Model definition

var Todo = mongoose.model('Todo', {
	text : String
});

// routes

	//api -------
	// Get all Todos
	app.get('/api/todos', function(req, res) {
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});

	app.post('/api/todos', function(req, res) {
		Todo.create({
			text: req.body.text,
			done: false
		}, function(err, todo) {
			if(err)
				res.send(err);

			Todo.find(function(err, todos) {
				if(err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	// delete a todo

	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if(err)
				res.send(err);

			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});
	

// Listen

app.listen(8080);
console.log("App listening on port 8080.");