/**
 * Created by Aule on 2/16/15.
 * Enables websocket connections and broadcastsc
 */
var _ = require('lodash') //- throws an error since lodash isn't defined
var ws = require('ws')

var clients = []

exports.connect = function (server) {
    var wss = new ws.Server({server:server})
    wss.on('connection', function(ws) {
        clients.push(ws)
        //Removes client on reconnect without error
        exports.broadcast('new client joined')
        //Bug1: _ doesn't reference anything but lodash doesn't work above
        //Bug2: broadcasts successfully if it's the browser is the only client, but not if there are multiple wcat sessions or using Safari
        ws.on('close', function() {
            _.remove(clients, ws)
            //could use exports.broadcast here ???
            console.log('websockets.js: websockets close client successfully')
        })
    })
}

exports.broadcast = function(topic, data) {
    var json = JSON.stringify({topic: topic, data: data})
    clients.forEach(function (client) {
        client.send(json)
        console.log('websockets.js: broadcast to each client successfully')
    })
}