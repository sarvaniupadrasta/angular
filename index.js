var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 3000;
//var logger = require('morgan');
var bookings = [];

var app = express();
//app.use(logger);
app.use(express.json());
app.use(express.urlencoded());
app.set("viewoptions",{
	layout:false
});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('public/index.html');
});

app.get('/movies',function(req,res){
	var movies = require('./data/movies.json');
	res.json(movies);
});

app.get('/bookings',function(req,res){
	res.json(bookings);
});

app.post('/book',function(req,res){
	var data ={
		'qty':req.body.qty,
		'date':req.body.date,
		'id':req.body.movie_id,
		'name':req.body.movie_name
	};
	bookings.push(data);
	res.json(bookings);
});

app.listen(port);
console.log("express server running" + port);
