const _ = require('lodash');
const conv = require('../code/convert_csv_to_json');
const readline = require('readline');

let file_csv1 = '../csv/groups.csv';
let file_csv2 = '../csv/students.csv';
let file_csv3 = '../csv/curators.csv';

let arr_groups = conv.csv_to_json(file_csv1);
let arr_students = conv.csv_to_json(file_csv2);
let arr_curators = conv.csv_to_json(file_csv3);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Выберите порядок сортировки: 1 - убывание, 2 - возрастание : ', (answer) => {

    function getAge(arr_groups, arr_students, arr_curators, curator_name) {

        let curator_id = _.filter(arr_curators, item => item.nameCur == curator_name).map(item => item.id); // id кураторов
        let groups_id = _.filter(arr_groups, item => _.some(curator_id, x => item.idCur == x)).map(item => item.id); // id групп
        let students = _.filter(arr_students, item => _.some(groups_id, x => item.idGr == x)).map(item => item.nameSt); // имена студентов
        
        if (answer == 1) {
            return _.orderBy(students, item => item, ['desc']);
        }
        else {
            return _.orderBy(students, item => item, ['asc']);
        }
    }

    console.log(getAge(arr_groups, arr_students, arr_curators, 'Ухова'));

    rl.close();
});