/**
 * Created by Aule on 1/2/15.
 * Not used by the application (supplanted by server.js)
 */
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(3000);
