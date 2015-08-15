var http = require('http');

var port = process.env.PORT;
var host = process.env.IP;

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' :"text/type"});
	res.end('Hello World\n');
}).listen(port, host);

console.log("server running!");

