/**
 * Created by Aule on 1/12/15.
 * Delivers the angular app
 */
var express = require('express')
var router = express.Router()
var path = require('path');

router.use(express.static(__dirname + '/../assets'))

router.get('/', function (req, res){
    //res.sendFile('layouts/posts.html',)  This doesn't work from the tutorial
    res.sendFile(path.join(__dirname, '../layouts','posts.html'))
})

module.exports = router