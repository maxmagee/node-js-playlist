var http = require('http');

var server = http.createServer(function(req, resp) {
  console.log('request was made: ' + req.url);
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
