const get_conn = require('./utils').get_conn;

let query_create_table = "CREATE TABLE `students` ( \
    `id` INT NOT NULL , \
    `firstName` VARCHAR(20) NOT NULL , \
    `lastName` VARCHAR(20) NOT NULL , \
    `keyGroup` INT NOT NULL , \
    PRIMARY KEY (`id`))";

const conn = get_conn();

conn.promise()
    .query(query_create_table)
    .then(() => console.log("Таблица создана"))
    .catch((err) => console.error(err))
    .then(conn.end());