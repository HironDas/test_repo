var maxTime = 1000;

var evenDoubler = function(v,callback) {
    var time = Math.floor((Math.random()*999)+1);
    setTimeout((function() {
        if (!(v % 2)) {
            var doubled = v * 2;
            callback(null, doubled ,time);
        } else {
            callback(new Error('Number: ' + v + ' is not even.'));
        }
    }), time);
};

module.exports.evenDoubler = evenDoubler;
module.exports.foo = "bar";
