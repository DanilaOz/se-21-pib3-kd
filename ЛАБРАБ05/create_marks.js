const get_conn = require('./utils').get_conn;

let query_create_table = "CREATE TABLE `marks` ( \
    `keyStudent` INT NOT NULL , \
    `keySubject` INT NOT NULL , \
    `mark` INT NOT NULL , \
    PRIMARY KEY (`keyStudent`, `keySubject`))";

const conn = get_conn();

conn.promise()
    .query(query_create_table)
    .then(() => console.log("Таблица создана"))
    .catch((err) => console.error(err))
    .then(conn.end());