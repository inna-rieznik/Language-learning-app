const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


//get list of LESSONS
router.get('/', (req, res) => {
    db.query('SELECT * FROM mydb.lessons',
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            console.log(result);
            res.send(result);
        })

});

module.exports = router;