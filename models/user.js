/**
 * Created by Aule on 2/10/15.
 * File is dependent on db.js and defines a schema or Mongoose model to store users
 */
var db = require('../db')
var user = db.Schema({
    username: {type: String, required:true},
    password: {type: String, required:true, select: false}
})
module.exports = db.model('User', user)
