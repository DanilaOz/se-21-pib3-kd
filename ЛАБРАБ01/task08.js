// put your javascript (node.js) code here
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение
    let res = lines[0]
        .split(' ')
        .map(item => +item)
        .reduce((prev,next) => prev ^ next);
    
    console.log(res);
});