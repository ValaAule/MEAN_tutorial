/**
 * Created by Aule on 1/12/15.
 * Delivers the angular app
 */
var express = require('express')
var router = express.Router()

router.use(express.static(_dirname + '/../assets'))

router.get('/', function (req, res){
    res.sendfile('layouts/posts.html')
})

module.exports = router