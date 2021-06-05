const get_conn = require('./utils').get_conn;
const conv = require('./convert_json');

let curators_array = conv.csv_to_json('./students.csv');
let rows = curators_array.map(item => Object.values(item));

let query_insert = "INSERT INTO students \
(id, firstName, lastName, keyGroup) VALUES ? ";

const conn = get_conn();

conn.promise()
    .query(query_insert, [rows])
    .then(() => console.log("CSV файл импортирован"))
    .catch((err) => console.error(err))
    .then(conn.end());