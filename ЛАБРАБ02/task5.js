const _ = require('lodash');
var data_array = require('../JSON/data.js')

function rgbToHex(rgb) {
    //var rgb = rgb.match(/^rgba?[\s+]?\[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    
    return (rgb && rgb.length === 4) ? "#" + 
        ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) + 
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) : '';
}

let new_data = _(data_array)
    .zip(data_array.colors, data_array.argb)
    .map(item => _.zipObject(['color','hex_name'], [item[0], rgbToHex(item[1])]))
    .orderBy('color')
    .value();

console.log(new_data)