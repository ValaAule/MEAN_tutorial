/**
 * Created by Aule on 1/3/15.
 */

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use('api/posts', require('./controllers/api/posts'))

//added in chapter 5, page 55
app.get('/', function(req, res) {
    res.sendfile('layouts/posts.html')
})

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})