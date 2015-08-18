var should = require("should");
var fun = require("./mathfun");

describe('MathFun', function(){
    
    describe('when used synchronously', function(){
        
         it('should double even numbers correctly', function(){
            fun.evenDoublerSync(2).should.equal(4);
        });
        
        it('Should throw on Odd numbers', function(done){
            (function() { fun.evenDoublerSync(3) }).should.throw(/odd/);
            done();
        });
        
    });
    
    describe("when used asynchronously", function() {
        it("should double even numbers correctly", function(done){
            
            fun.evenDoubler(2, function(err, results){
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });
        
        it('should relurn an error on odd number', function(done) {
            fun.evenDoubler(3, function(err, results){
                should.exist(err);
                should.not.exist(results);
                done();
            })
        })
    });
   
    
});
