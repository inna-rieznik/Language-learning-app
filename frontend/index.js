const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "mydb"
});

app.listen(3001, () => {
    console.log("running server");
});