/**
 * Created by Aule on 2/19/15.
 * Angular run component executed during the initialization phase
 */

angular.module('app')
    .run(function ($rootScope, $timeout) {
        (function connect() {
            var url = 'ws://localhost:3000'
            var connection = new WebSocket(url)

            connection.onopen = function() {
                console.log('ng/websockets.js: websocket connected')
            }

            //reconnect logic
            connection.onclose = function (e) {
                console.log('Websocket closed. Reconnecting...')
                $timeout(connect, 10*1000)
            }
            connection.onmessage = function(e) {
                console.log(e)
                var payload = JSON.parse(e.data)
                $rootScope.$broadcast('ws:' + payload.topic, payload.data)
            }
        }) ()
    })