var mathfun = require("./mathfun");

var processResults = function(err, results, time){
    if (err){
        console.log("ERROR: "+err.message);
    } else {
        console.log("the results are: " + results + " (" +time +" ms)");
        
    }
};

for(var i = 0; i<10; i++) {
    console.log("Calling 'evenDoubler' with paramter '"+ i +"'");
    mathfun.evenDoubler(i, processResults);
}

console.log("-------------");

console.log("the 'foo' variable from module 'mathfun'= "+mathfun.foo);
console.log("the 'maxTime' variable from module 'mathfun'= "+mathfun.maxTime);
