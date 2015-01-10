* Not used by the application (supplanted by server.js)

var express = require('express');
var app = express ();

app.get('/', function(req,res) {
    res.send(200, 'Hello World 2')
});

app.listen(8888);