const _ = require('lodash');
const conv = require('../code/convert_csv_to_json');

let file_csv1 = '../csv/groups.csv';
let file_csv2 = '../csv/students.csv';

let arr_groups = conv.csv_to_json(file_csv1);
let arr_students = conv.csv_to_json(file_csv2);

function getAge(arr_groups, arr_students) {

    let groups = _.orderBy(arr_groups,['nameGr'],['asc']);

    let student_name = [];
    _.forEach(groups, function(value){
        return student_name.push(_.filter(arr_students, item => item.idGr == value.id));
    });
    let student_names_flatten =  _.flatten(student_name); // Фамилии студентов

    let orderBy_students_age = _.orderBy(_.orderBy(student_names_flatten, ['age'],['desc']), ['idGr'], ['asc']);

    let group_name = [];
    _.forEach(orderBy_students_age, function(value){
        return group_name.push(_.filter(groups, item => item.id == value.idGr));
    });
    let group_names_flatten =  _.flatten(group_name); // Группы

    let zip_groups = _.map(group_names_flatten , item => _.zipObject(['Группа'], [item.nameGr]));
    let zip_students = _.map(orderBy_students_age , item => _.zipObject(['Фамилия'], [item.nameSt]));

    console.table(_.merge(zip_groups,zip_students));
}

getAge(arr_groups, arr_students);