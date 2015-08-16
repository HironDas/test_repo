var EventEmitter = require("events").EventEmitter;


function Resource(m){
    
    var maxEvents = m;
    var self = this;
    
    process.nextTick(function(){
        var count = 0;
        self.emit('start');
        var t = setInterval(function(){
            self.emit('data', ++count);
            if(count === maxEvents){
                self.emit('end', count);
                clearInterval(t);
            }
        },1000);
    });
    
};

Resource.prototype = Object.create(EventEmitter.prototype);

module.exports = Resource; 