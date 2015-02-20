/**
 * Created by Aule on 2/19/15.
 */

angular.module('app')
    .run(function ($rootScope) {
        var url = 'ws://localhost:3000'
        var connection = new WebSocket(url)

        connection.onopen = function() {
            console.log('ng/websockets.js: websocket connected')

            connection.onmessage = function(e) {
                console.log(e)
                var payload = JSON.parse(e.data)
                $rootScope.$broadcast('ws:' + payload.topic, payload.data)
            }
        }
    })