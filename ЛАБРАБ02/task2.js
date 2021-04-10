const { flatten } = require('lodash');
const _ = require('lodash');
var colors_array = require('../JSON/colors.json');

let colors = _(colors_array)
    .map(item => _.toPairs(item))
    .flatten()
    .map(item => _.concat(item[0], _.dropRight(item[1])))
    .map(item => _.zipObject(['color', 'rgb'], [item[0], _.takeRight(item,3)]))
    .orderBy('color')
    .value();

console.log(colors);