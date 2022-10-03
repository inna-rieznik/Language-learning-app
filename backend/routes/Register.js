const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    db.query(
        "INSERT INTO mydb.users (username,password,id_language,id_role, name, email, registered_at) values(?,?,1,1,?,?,NULL)",
        [email, password, username, email],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            res.send({status: 'ok'})
        })
})


module.exports = router;