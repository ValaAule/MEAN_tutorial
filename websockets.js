/**
 * Created by Aule on 2/16/15.
 * Enables websockets
 */
//var _ = require('lodash') - not sure why this is needed, throws an error
var ws = require('ws')

var clients = []

exports.connect = function (server) {
    var wss = new ws.Server({server:server})
    wss.on('connection', function(ws) {
        clients.push(ws)
        exports.broadcast('new client joined')
        ws.on('close', function() {
            _.remove(clients, ws)
            console.log('websockets.js: websockets close client successfully')
        })
    })
}

exports.broadcast = function(topic, data) {
    var json = JSON.stringify({topic: topic, data: data})
    clients.forEach(function (client) {
        client.send(json)
    })
}