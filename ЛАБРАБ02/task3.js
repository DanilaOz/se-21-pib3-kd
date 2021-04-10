const { filter } = require('lodash');
const _ = require('lodash');
var users_array = require('../JSON/users.json');

// lat - широта. У южного полушария от 0 до -90
// lng - долгота

let user = _(users_array)
    .filter(item => item.address.geo.lat < 0)
    .map(item => _.zipObject(['username','city'], [item.username, item.address.city]))
    .orderBy('city','desc')
    .value();

console.log(user)