/**
 * Created by Aule on 2/12/15.
 */
var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function(req, res, next) {
    if(req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret)
        console.log('auth.js: jwt authentication successful')
    }
    next()
}
