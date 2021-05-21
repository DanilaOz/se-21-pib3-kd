const get_conn = require('../lab4/utils').get_conn;

let query_select_laura = "SELECT id, DATE_FORMAT(day, '%Y.%m.%d'), city, name, count \
FROM data_set WHERE name = ? ";

let params = ['laura abc']

const conn = get_conn();

conn.promise()
    .query(query_select_laura, params)
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());