var net = require('net');
var client = net.connect(
    {host: '127.0.0.1', port: 8080},
    function() {
        client.write('hello');
    }
);
 
client.on('data', function(data) {
    console.log(data.toString());
});
