const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


//get list of words
router.get('/', (req, res) => {
    db.query('SELECT * FROM mydb.words',
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

//add word to db
router.post('/', (req, res) => {
    //to access data from FE we use body
     const source = req.body.source;
     const target = req.body.target;

    db.query(
        "INSERT INTO mydb.words (id_lesson, id_state, id_language, source, target) values(1,1,1,?,?)",
        [source, target],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            res.send({status: 'ok'})
        })
    /*loop to add this word to every existed user */
/*
    db.query(
        "INSERT INTO mydb.users_words (id_word,id_user) values((select Max(id_word) from mydb.words), 1)",
        [source, target],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            res.send({status: 'ok'})
        })*/
})


module.exports = router;
