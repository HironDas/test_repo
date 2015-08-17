var http = require("http");

var socketio = require("socket.io");
var fs = require("fs");

var handeler = function(req, res) {
    fs.readFile(__dirname+"/index1.html", function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index1.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handeler);
var io = socketio.listen(app);

io.sockets.on ("connection", function(socket){
    setInterval(function(){
        var timestamp = Date.now();
        console.log("Emitted: "+timestamp);
        socket.emit("timer", timestamp);
    }, 2000);
    socket.on('submit', function(data){
        console.log("Submited: " + data);
    });
});

app.listen(process.env.PORT || 8080);

console.log("Server Running!!");