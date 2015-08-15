var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' :"text/type"});
	res.end('Hello World\n');
}).listen(1337);

console.log("server running!");

