var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  console.log('request was made: ' + req.url);

  resp.writeHead(200, {'Content-Type': 'text/html'});
  myReadStream.pipe(resp);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
