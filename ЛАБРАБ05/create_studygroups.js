const get_conn = require('./utils').get_conn;

let query_create_table = "CREATE TABLE `studygroups` ( \
    `idGr` INT NOT NULL , \
    `nameGroup` VARCHAR(10) NOT NULL , \
    `keyCur` INT NOT NULL , \
    PRIMARY KEY (`idGr`))";

const conn = get_conn();

conn.promise()
    .query(query_create_table)
    .then(() => console.log("Таблица создана"))
    .catch((err) => console.error(err))
    .then(conn.end());