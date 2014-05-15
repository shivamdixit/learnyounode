var fs = require('fs');
var filePath = process.argv[2];

var string = fs.readFileSync(filePath, 'utf-8');
var array = string.split('\n');

console.log(array.length-1);
