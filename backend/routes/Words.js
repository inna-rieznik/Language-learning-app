const express = require('express');
const mysql = require("mysql");
const authMiddleware = require("../middleware/authMidleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


//get list of words
router.get('/', authMiddleware, (req, res) => {

    try {
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
    } catch (e) {
        console.log(e)
    }


});

router.get('/random/6', authMiddleware, (req, res) => {

    try {
        db.query('select * from mydb.words ORDER BY RAND() LIMIT 6',
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.send({status: 'error', err})
                    return;
                }
                console.log(result);
                res.send(result);
            })
    } catch (e) {
        console.log(e)
    }


});


//add word to db
router.post('/', roleMiddleware(['admin']), (req, res) => {
    //to access data from FE we use body
    try {
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
    } catch (e) {
        console.log(e)
    }


    /*loop to add this word to every existed user */

    /*db.query(
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
