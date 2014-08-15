#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var app = express();
var inputFile = 'index.html';

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

var output = fs.readFileSync(inputFile, 'utf-8');

app.get('/', function(request, response) {
  response.send(output);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
