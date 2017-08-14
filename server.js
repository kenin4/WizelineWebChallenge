var express = require('express'),
	app = express(),
	port = process.env.PORT || 3030,
	mongoose = require('mongoose'),
	URL = require('./API/models/urlModel'),
	bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/URLDB');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var routes = require('./API/routes/routes');
routes(app);

app.listen(port);

console.log('URL shortener RESTful API server started on : ' + port);