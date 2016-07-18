var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
  console.log('request was made: ' + req.url);
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('feed me popcorn');
});

server.listen(3000, '127.0.0.1');
console.log('currently listening on port 3000');
