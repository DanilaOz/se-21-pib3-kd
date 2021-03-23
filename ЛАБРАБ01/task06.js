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
        .sort((a,b) => a - b)
        
    let sum_lines = new_lines.reduce((prev,next) => prev + next);
    let max = Math.max(...new_lines);
    let nums = max * (max + 1) / 2;
    
    console.log(nums - sum_lines);
});