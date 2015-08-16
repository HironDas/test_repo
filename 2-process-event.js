process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write("Data!-->"+chunk);
});

console.log("port: ",process.env.PORT );

process.stdin.on('end', function(chunk) {
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function(){
    process.stderr.write("why r u trying to terminate me???!!!!!! :-)");
});

console.log("Node is running as process #"+ process.pid);