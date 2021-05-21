const get_conn = require('../lab4/utils').get_conn;

let query_create_table = "CREATE TABLE `data_set` ( \
    `id` INT NOT NULL AUTO_INCREMENT , \
    `day` DATE NOT NULL , \
    `city` VARCHAR(30) NOT NULL , \
    `name` VARCHAR(40) NOT NULL , \
    `count` INT NOT NULL , \
    PRIMARY KEY (`id`))";

const conn = get_conn();

conn.promise()
    .query(query_create_table)
    .then(() => console.log("Таблица создана"))
    .catch((err) => console.error(err))
    .then(conn.end());