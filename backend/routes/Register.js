const express = require('express');
const mysql = require("mysql");
const {response} = require("express");

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

    //if exist user with the same credentials
    db.query(
        "SELECT * FROM mydb.users WHERE email = ? AND username = ?",
        [email, username],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err});
                return;
            }

            if (result.length > 0) {
                res.send({"message": "User with the same username and email already exist"});
                return;

            } else {
                db.query(
                    "INSERT INTO mydb.users (username, password,id_language,id_role, name, email, registered_at) values(?,?,1,1,?,?, NULL)",
                    [username, password, username, email],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send({status: 'error', err})
                            return;
                        }
                        res.send({status: 'ok'});
                    }
                )

                db.query(
                   "INSERT INTO mydb.users_progress (score, level, updated_at) values(0,1,NULL)",
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send({status: 'error', err})
                            return;
                        }
                        res.send({status: 'ok'});
                    }
                )

            }

        }
    )
})


module.exports = router;