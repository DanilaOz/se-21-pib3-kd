const get_conn = require('../lab4/utils').get_conn;

let query_select = "SELECT id, DATE_FORMAT(day, '%Y.%m.%d'), city, name, count \
FROM data_set ORDER BY count DESC LIMIT ?";

let params = [20]

const conn = get_conn();

conn.promise()
    .query(query_select, params)
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());