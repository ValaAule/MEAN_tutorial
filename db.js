var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
    console.log('mongodb connected to social db')
})
module.exports = mongoose