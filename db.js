/**
 * Created by Aule on 1/3/15.
 * Establishes connection to MongoDB via mongoose
 */

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
    console.log('mongodb connected to social db')
})
module.exports = mongoose