/**
 * Created by Aule on 1/3/15.
 * Stubbed out post for Node.js
 */

var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/posts')

var app = express()
app.use(bodyParser.json())

// get data
app.get('/api/posts', function (req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
})

// submits data
app.post('/api/posts', function (req, res, next) {
    //build a new model of schema username and body
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })

    //save model above and send a json representation of it
    // if there's an error, the next call will pass it to Express to pass on to the client
    post.save(function (err,post) {
        if (err) { return next(err) }
        res.json(201, post)
    })

    //output post and associated data
    console.log('post received!')
    console.log(req.body.username)
    console.log(req.body.body)
    res.send(201)
})

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})