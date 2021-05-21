const get_conn = require('../lab4/utils').get_conn;

let query_insert = "INSERT INTO data_set \
(day, city, name, count) \
VALUES \
('2021-04-17', 'Александровск', 'Elon Musk', 202)";

const conn = get_conn();

conn.promise()
    .query(query_insert)
    .then(() => console.log("Запись добавлена"))
    .catch((err) => console.error(err))
    .then(conn.end());