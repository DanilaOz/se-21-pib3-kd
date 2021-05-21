const get_conn = require('../lab4/utils').get_conn;
const conv = require('../lab4/convert_json');

let data_set_array = conv.csv_to_json('../lab4/data_set.csv');
let rows = data_set_array.map(item => Object.values(item));

let query_insert = "INSERT INTO data_set \
(day, city, name, count) VALUES ? ";

const conn = get_conn();

conn.promise()
    .query(query_insert, [rows])
    .then(() => console.log("CSV файл импортирован"))
    .catch((err) => console.error(err))
    .then(conn.end());