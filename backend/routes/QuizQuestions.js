const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/', (req, res) => {
    db.query(
        'select id_quiz_questions, content from quiz_questions',
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            console.log(result);
            res.json(result);
        }
    )
})

router.post('/', (req, res) => {
    //to access data from FE we use body
    const quizQuestion = req.body.quizQuestion;

    db.query(
        "insert into mydb.quiz_questions(id_quizes, type, score, content) values (1,'quiz', 1, ?)",
        [quizQuestion],
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