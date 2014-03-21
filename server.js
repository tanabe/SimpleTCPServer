var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8080;
var server = net.createServer();

var sockets = [];
var broadcast = function(message) {
    for (var i = 0; i < sockets.length; i++) {
        var socket = sockets[i];
        try {
            socket.write(message);
        } catch(error) {
        }
    }
};

server.on('connection', function(sock) {
    console.log('connected: ' + sock.remoteAddress + ' ' + sock.remotePort);
    sockets.push(sock);
 
    sock.on('data', function(data) {
        broadcast(data);
    });
 
    sock.on('close', function(data) {
        console.log('closed: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
 
}).listen(PORT, HOST);
