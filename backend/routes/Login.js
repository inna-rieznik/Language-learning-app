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
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM mydb.users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err});
                return;
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({"message": "wrong email or password"});
            }

        })
})


module.exports = router;