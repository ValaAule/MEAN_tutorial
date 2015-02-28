/**
 * Created by Aule on 1/12/15.
 * REST endpoint: get and post posts
 */

var router = require('express').Router()
var websockets = require('../../websockets')


// get data
router.get('/api/posts', function (req, res, next) {
    var Post = require('../../models/post')
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
    console.log('posts.js: found post successfully')
})

// submits data using req.auth.username instead of req.body.username makes the post associate with user
router.post('/api/posts', function (req, res, next) {
    //build a new model of schema username and body
    var post = new Post({body: req.body.body})
    websockets.broadcast('route_post', post)
    if (typeof req.auth !== 'undefined') {
        post.username = req.auth.username
    }
    else {
        post.username = 'default'
    }

    // save model above and send a json representation of it
    // if there's an error, the next call will pass it to Express to pass on to the client
    post.save(function (err,post) {
        if (err) { return next(err) }
        websockets.broadcast('new_post', post)
        res.status(201).json(post)
    })
    console.log('posts.js: saved post successfully')
})

module.exports = router