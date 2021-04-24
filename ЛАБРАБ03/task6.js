const { zipObject } = require('lodash');
const _ = require('lodash');
const conv = require('../code/convert_csv_to_json');

let file_csv1 = '../csv/groups.csv';
let file_csv2 = '../csv/students.csv';
let file_csv3 = '../csv/hobby.csv';
let file_csv4 = '../csv/merge.csv';

let arr_groups = conv.csv_to_json(file_csv1);
let arr_students = conv.csv_to_json(file_csv2);
let arr_hobby = conv.csv_to_json(file_csv3);
let arr_merge = conv.csv_to_json(file_csv4);

function getAge(arr_groups, arr_students, arr_hobby, arr_merge, group_name) {
    
    let group_ID = _.find(arr_groups, item => item.nameGr == group_name).id; // ID группы ПИб-1
    let group_students = _.filter(arr_students, x => x.idGr == group_ID); // Студенты группы ПИб-1
    let students_merge = _.filter(arr_merge, item => _.some(group_students, x => item.idStudent == x.id)); // ID хобби и студентов
   
    let students_ID_merge = _.map(students_merge, a => a.idStudent); // ID студентов
    let hobby_ID_merge = _.map(students_merge, a => a.idHobby); // ID хобби
    
    let hobby_name = [];
    _.forEach(hobby_ID_merge, function(value){
        return hobby_name.push(_.filter(arr_hobby, item => item.id == value).map(a => a.name));
    });
    let hobby_names_flatten =  _.flatten(hobby_name); // Названия хобби

    let student_name = [];
    _.forEach(students_ID_merge, function(value){
        return student_name.push(_.filter(arr_students, item => item.id == value).map(a => a.nameSt));
    });
    let student_names_flatten =  _.flatten(student_name); // Фамилии студентов

    let zip_student = _.map(student_names_flatten , item => _.zipObject(['Фамилия'], [item]));
    let zip_hobby = _.map(hobby_names_flatten , item => _.zipObject(['Хобби'], [item]));
    
    // Объединие и сортировка Фамилии - по возрастанию, Хобби - по убыванию
    let merged_table = _.merge(_.orderBy(zip_student,['Фамилия'],['asc']), _.orderBy(zip_hobby,['Хобби'],['desc']));
    
    console.table(merged_table);
}

getAge(arr_groups, arr_students, arr_hobby, arr_merge, 'ПИб-1');