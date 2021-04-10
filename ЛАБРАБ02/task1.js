const _ = require('lodash');
var colors_array = require('../JSON/colors.json');

let colors = _(colors_array)
    .map(item => _.toPairs(item))
    .flatten()
    .map(item => item[0])
    .filter(item => item.length < 6)
    .orderBy()
    .value();

console.log(colors);
