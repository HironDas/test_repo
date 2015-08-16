var b = new Buffer("hello");

console.log(b.toString());

console.log(b.toString('base64'));

var c = new Buffer("World").toString('base64');

console.log(b.toString('utf-8', 0, 2));
