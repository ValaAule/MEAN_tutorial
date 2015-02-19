/**
 * Created by Aule on 2/16/15.
 * Enables websockets
 */
var ws = require('ws')
exports.connect = function (server) {
    var wss = new ws.Server({server:server})
    wss.on('connection', function(ws) {
        ws.send('hello!')
    })
}