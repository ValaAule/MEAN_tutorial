/**
 * Created by Aule on 1/3/15.
 * Server file
 */

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use( require('./controllers/api/posts'))
app.use( require('./controllers/static'))

app.listen(3000, function() {
    console.log('Server listening on', 3000)
    })