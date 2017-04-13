var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var fs = require('fs');
var listenPort = 80;


// Static files
app.use('/', express.static('www'));


// Serve
app.listen(listenPort, function () {
    console.log('Server listening on port ' +  listenPort);
});