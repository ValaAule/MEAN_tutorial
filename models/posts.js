// is dependent on db.js and creates a schema for the model
var db = require('.../db')
var Post = db.model('Post', {
    username: {type: String, requried:true },
    body: {type: String, required: true },
    date: {type: Date, required: true, default: Date.now}
})

// makes the Post variable available to other modules
module.exports = Post