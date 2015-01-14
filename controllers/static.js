/**
 * Created by Aule on 1/12/15.
 * Delivers the angular app
 */

var router = require('express').Router()

router.get('/', function (req, res){
    res.sendfile('layouts/posts.html')
})

module.exports = router