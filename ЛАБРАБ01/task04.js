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
    let new_lines = lines[0].split(' ').sort(function(a,b)
        {
            return a - b;
        });
    var result = new_lines.slice(0,3).reduce(function(sum, current) {   
        return parseInt(sum) + parseInt(current);
    });
    console.log(result);
});