var WebSocketServer = require('websocket').server;
var http = require('http');
var stock = require('./stock');

var server = http.createServer(function (request, response) {});
server.listen(1337, function () {});

wsServer = new WebSocketServer({
    httpServer: server
});


wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    stock.start((type, data) => {
        connection.sendUTF(JSON.stringify({
            type,
            data
        }))
    })


    connection.on('message', function (message) {
        if (message.type === 'utf8') {}
    });

    connection.on('close', function (connection) {

    });
});