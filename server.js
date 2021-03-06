var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./router.js');

var app = express();
var port = process.env.PORT || 8000;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/myApp';

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'Hack Reactor API Hackathon Example API'});
});

app.use('/students', router);


app.listen(port);
