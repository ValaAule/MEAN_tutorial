// is dependent on db.js and creates a schema or Mongoose model to store the posts
var db = require('../db')
var Post = db.model('Post', {
    username: {type: String, required:true },
    body: {type: String, required: true },
    date: {type: Date, required: true, default: Date.now}
})

// makes the Post variable available to other modules
module.exports = Post