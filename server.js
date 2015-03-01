/**
 * Created by Aule on 1/3/15.
 * Server file: Global middleware (Express), config, mounting controllers, logging, error handling
 * Called at nod.js startup via node server.js
 */

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use( require('./auth'))
app.use( require('./controllers/api/posts'))
app.use( require('./controllers/static'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

var port = process.env.PORT || 3000
var server = app.listen(port, function() {
    console.log('server.js: server listening on', port)
    })
require('./websockets').connect(server)