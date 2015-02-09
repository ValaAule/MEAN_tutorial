/**
 * Created by Aule on 1/12/15.
 * Delivers the static content via Express middleware
 */
var express = require('express')
var router = express.Router()
var path = require('path');

// Has the express server serve the assets in the directory assets (e.g. app.js)
//__dirname points to current working directory (e.g. controllers)
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

//By default fetches and serves posts.html
router.get('/', function (req, res){
    //res.sendFile('layouts/posts.html',)  This doesn't work from the tutorial
    res.sendFile(path.join(__dirname, '../layouts','app.html'))
})

module.exports = router