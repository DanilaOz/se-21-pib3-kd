const { flatten, filter } = require('lodash');
const _ = require('lodash');
var clients_array = require('../JSON/clients.json')

let client = _(clients_array)
    .flatMapDeep()
    .filter(item => item.address.city == 'Кунгур')
    .orderBy(['gender','age','name'],['asc','desc','asc'])
    .value();
console.log(client);