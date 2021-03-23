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
    let new_lines = lines[0]
        .split(' ')
        .map(item => +item)
        .sort((a,b) => a - b);
    
    let res = new_lines.find(function(item,i){
        return item === i;
    });
    
    console.log(res);
});