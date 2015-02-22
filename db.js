/**
 * Created by Aule on 1/3/15.
 * Establishes connection to MongoDB via mongoose
 */

var mongoose = require('mongoose')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/social'
mongoose.connect(url)
console.log('db.js: mongodb connected to social db')
module.exports = mongoose