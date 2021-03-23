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

    let new_lines = lines.splice(1).map(item => +item).filter(item => item % 10 === 3).sort(function(a,b)
        {
            return a - b;
        });
    
    console.log(new_lines[0]);
});