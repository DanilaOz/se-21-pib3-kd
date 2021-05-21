const mysql = require("mysql2");

const BD = {
    host: "pgsha.ru",
    port: "35006",
    user: "soft0082",
    password: "O187237Y",
    database: "soft0082_labrab04"
};

function get_connection() {
    return mysql.createConnection(BD);
}

module.exports.get_conn = get_connection;