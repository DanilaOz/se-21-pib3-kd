const _ = require('lodash');
const conv = require('../code/convert_csv_to_json');

let file_csv1 = '../csv/groups.csv';
let file_csv2 = '../csv/students.csv';

let arr_groups = conv.csv_to_json(file_csv1);
let arr_students = conv.csv_to_json(file_csv2);

function getAge(arr_groups, arr_students, name_group) {
    let filter_students = _.find(arr_groups, item => item.nameGr == name_group).id;
    let find_student = _.filter(arr_students, item => item.idGr == filter_students);
    let map_students_age = _.map(find_student, item => item.age);
    let average_age = _.reduce(map_students_age, (prev, next) => (parseInt(prev) + parseInt(next)) / next.length);
    return Math.floor(average_age);
}

console.log(getAge(arr_groups, arr_students, 'ПИб-1'));
