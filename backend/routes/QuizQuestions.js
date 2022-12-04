const express = require('express');
const mysql = require("mysql");
const authMiddleware = require("../middleware/authMidleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    typeCast: function castField(field, useDefaultTypeCasting) {
        if ((field.type === "BIT") && (field.length === 1)) {
            const bytes = field.buffer();
            return (bytes[0] === 1);
        }

        return (useDefaultTypeCasting());

    }
});

router.get('/', authMiddleware, (req, res) => {
    db.query(
        'select quiz_questions.id_quiz_questions, score, quiz_questions.content as question, id_quiz_answers, correct, qa.content as answer from mydb.quiz_questions join mydb.quiz_answers qa on quiz_questions.id_quiz_questions = qa.id_quiz_questions',
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }

            const results = {};
            for (const row of result) {
                if (results[row.id_quiz_questions]) {
                    results[row.id_quiz_questions].answers.push({
                        value: row.answer,
                        correct: row.correct
                    })
                } else {
                    results[row.id_quiz_questions] = {
                        question: row.question,
                        answers: [{
                            value: row.answer,
                            correct: row.correct
                        }]
                    }
                }
            }

            const response = []
            for (const key of Object.keys(results)) {
                response.push(results[key]);
            }

            res.json(response);
        }
    )
})

//only admin can add new quiz question
router.post('/', roleMiddleware(['admin']),  (req, res) => {
    //to access data from FE we use body
    const quizQuestion = req.body.quizQuestion;
    //add there lesson id and add it at create lesson page
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