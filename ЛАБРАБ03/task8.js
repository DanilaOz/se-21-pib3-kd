const _ = require('lodash');
const conv = require('../code/convert_csv_to_json');
const readline = require('readline');

let file_csv1 = '../csv/students.csv';
let file_csv2 = '../csv/hobby.csv';
let file_csv3 = '../csv/merge.csv';

let arr_students = conv.csv_to_json(file_csv1);
let arr_hobby = conv.csv_to_json(file_csv2);
let arr_merge = conv.csv_to_json(file_csv3);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите название хобби : ', (answer) => {

    function getAge(arr_students, arr_hobby, arr_merge) {
        
        let hobby_ID = _.find(arr_hobby, item => item.name == answer).id;
        let find_students_ID_by_hobby_ID = _.filter(arr_merge, item => item.idHobby == hobby_ID).map(a => a.idStudent);
        
        let find_students = _.filter(arr_students, item => _.some(find_students_ID_by_hobby_ID, x => item.id == x)).map(a => a.nameSt);

        if (find_students.length != 0) {
        console.table(_.map(find_students, item => _.zipObject(['Студенты, которые увлечены хобби: '+answer+''], [item])));
        } else console.log("Этим хобби никто не занимается");

    }

    getAge(arr_students, arr_hobby, arr_merge)

    rl.close();
});