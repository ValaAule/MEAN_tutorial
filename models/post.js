/**
 * Created by Aule on 1/3/15.
 * File is dependent on db.js and defines a schema or Mongoose model to store the posts
 */

var db = require('../db')
var Post = db.model('Post', {
    username:   {type: String, required:true },
    body:       {type: String, required: true },
    date:       {type: Date, required: true, default: Date.now}
})

console.log('Post Received -post.js')
module.exports = Post