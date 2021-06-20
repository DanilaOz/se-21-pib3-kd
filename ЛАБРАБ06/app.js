const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createPool({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0082",
    password: "O187237Y",
    database: "soft0082_labrab_06"   
});

const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs");

/* отобразить игроков */

app.get("/", function(req, res) { // получение списка игроков
    let query = "SELECT * FROM FNCSS7";
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            FNCSS7: data
        });
    });
});

/* Добавление нового игрока в таблицу */

app.get("/create", function(req, res) { // добавить игрока
    res.render("create.hbs");
});

app.post("/create", urlencodedParser, function (req, res) { // сохранить запись в БД
    if (!req.body) return res.sendStatus(400);
    const PLAYER = req.body.PLAYER;
    const POINTS = req.body.POINTS;
    const WINS = req.body.WINS;
    const AVG_ELIMS = req.body.AVG_ELIMS;
    const AVG_PLACE = req.body.AVG_PLACE;
    const COUNTRY = req.body.COUNTRY;
    let query = "INSERT INTO FNCSS7 (PLAYER, POINTS, WINS, AVG_ELIMS, AVG_PLACE, COUNTRY) VALUES (?,?,?,?,?,?)";
    let params = [PLAYER, POINTS, WINS, AVG_ELIMS, AVG_PLACE, COUNTRY];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

/* Изменение данных игрока */

app.get("/edit/:id", function(req, res) {
    const id = req.params.id;
    pool.query("SELECT * FROM FNCSS7 WHERE id=?", [id], function(err, data) {
        if (err) return console.error(err);
        res.render("edit.hbs", {
            participant: data[0]
        });
    });
});

app.post("/edit", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const PLAYER = req.body.PLAYER;
    const POINTS = req.body.POINTS;
    const WINS = req.body.WINS;
    const AVG_ELIMS = req.body.AVG_ELIMS;
    const AVG_PLACE = req.body.AVG_PLACE;
    const COUNTRY = req.body.COUNTRY;
    let query = "UPDATE FNCSS7 SET PLAYER=?, POINTS=?, WINS=?, AVG_ELIMS=?, AVG_PLACE=?, COUNTRY=? WHERE id=?";
    let params = [PLAYER, POINTS, WINS, AVG_ELIMS, AVG_PLACE, COUNTRY, id];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

/* удалить игрока */ 

app.post("/delete/:id", function(req, res) {
    const id = req.params.id;
    pool.query("DELETE FROM FNCSS7 WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        res.redirect("/");
    });
});

// Сортировка игроков по очкам

app.get("/sort/:field.:direct", function(req, res) { // получим список игроков
    const field = req.params.field;
    const direct = req.params.direct;
    let query = "SELECT * FROM FNCSS7 ORDER BY " + field + " " + direct;
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            FNCSS7: data
        });
    });
});

app.listen(3000, function() {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows / Linux
    console.log(`остановить сервер - ${hotKeys}`);
});