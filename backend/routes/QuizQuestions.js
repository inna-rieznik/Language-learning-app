const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/id/:lessonId/quiz', (req, res) => {
    const lessonId = req.params.lessonId;
    db.query(
        'select qq.id_quiz_questions, qq.content as quiz_question, qa.content as quiz_answer, qa.correct from mydb.quizes join mydb.quiz_questions qq on quizes.id_quizes = qq.id_quizes join mydb.quiz_answers qa on qq.id_quiz_questions = qa.id_quiz_questions join mydb.quiz_types qt on qt.id_question_types = quizes.id_question_types where id_lesson = ?',
            [lessonId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            console.log(result);
            res.send(result);
        }
    )
})

module.exports = router;