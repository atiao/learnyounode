var fs = require('fs');
var content = fs.readFileSync('process.js');
console.log(content)
console.log(content.toString())