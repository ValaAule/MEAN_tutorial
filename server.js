/**
 * Created by Aule on 1/3/15.
 * Stubbed out post for Node.js
 */

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
    res.json([
        {
            username: 'ValaAule',
            body: 'server.js rocks!'
        }
    ])
})

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})