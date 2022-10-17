const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/:questionId', (req, res) => {
    const questionId = req.body.questionId;
    db.query(
        'select id_quiz_answers, id_quiz_questions, content, correct from quiz_answers where id_quiz_questions = ?',
        [questionId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.json({status: 'error', err})
                return;
            }
            console.log(result);
            res.json(result);
        }
    )

})

router.post('/:questionId', (req, res) => {
    //to access data from FE we use body
    const quizQuestionId = req.body.quizQuestionId;
    const quizAnswer = req.body.quizAnswer;
    const isCorrect = req.body.isCorrect;
    db.query(
        "insert into mydb.quiz_answers(id_quiz_questions, correct, content) VALUES (?, ?, ?);",
        [quizQuestionId, isCorrect, quizAnswer],
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