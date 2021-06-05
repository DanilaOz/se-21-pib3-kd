const get_conn = require('./utils').get_conn;

let query_create_table = "CREATE TABLE `curators` ( \
    `idCur` INT NOT NULL , \
    `nameCur` VARCHAR(12) NOT NULL , \
    PRIMARY KEY (`idCur`))";

const conn = get_conn();

conn.promise()
    .query(query_create_table)
    .then(() => console.log("Таблица создана"))
    .catch((err) => console.error(err))
    .then(conn.end());