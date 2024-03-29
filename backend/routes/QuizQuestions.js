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


//get all questions
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


//get WORD questions
router.get('/word', authMiddleware, (req, res) => {
    db.query(
        "select quiz_questions.id_quiz_questions, score, quiz_questions.content as question, id_quiz_answers, correct, qa.content as answer " +
        "from mydb.quiz_questions join mydb.quiz_answers qa on quiz_questions.id_quiz_questions = qa.id_quiz_questions " +
        "join quizes q on q.id_quizes = quiz_questions.id_quizes " +
        "where id_quiz_types = '1'",
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


//get GRAMMAR questions
router.get('/grammar', authMiddleware, (req, res) => {
    db.query(
        "select quiz_questions.id_quiz_questions, score, quiz_questions.content as question, id_quiz_answers, correct, qa.content as answer " +
        "from mydb.quiz_questions join mydb.quiz_answers qa on quiz_questions.id_quiz_questions = qa.id_quiz_questions " +
        "join quizes q on q.id_quizes = quiz_questions.id_quizes " +
        "where id_quiz_types = '2'",
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


//get WORD question in lesson N
router.get('/word/:lessonId', authMiddleware, (req, res) => {
    const lessonId = req.params.lessonId;
    db.query(
        "select quiz_questions.id_quiz_questions, score, quiz_questions.content as question, id_quiz_answers, correct, qa.content as answer\n" +
        "from mydb.quiz_questions\n" +
        "         join mydb.quiz_answers qa on quiz_questions.id_quiz_questions = qa.id_quiz_questions\n" +
        "         join quizes q on q.id_quizes = quiz_questions.id_quizes\n" +
        "         join lessons l on l.id_lesson = q.id_lesson\n" +
        "where id_quiz_types = '1' and l.id_lesson = ?",
        [lessonId],
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

//get GRAMMAR question in lesson N
router.get('/grammar/:lessonId', authMiddleware, (req, res) => {
    const lessonId = req.params.lessonId;
    db.query(
        "select quiz_questions.id_quiz_questions, score, quiz_questions.content as question, id_quiz_answers, correct, qa.content as answer\n" +
        "from mydb.quiz_questions\n" +
        "         join mydb.quiz_answers qa on quiz_questions.id_quiz_questions = qa.id_quiz_questions\n" +
        "         join quizes q on q.id_quizes = quiz_questions.id_quizes\n" +
        "         join lessons l on l.id_lesson = q.id_lesson\n" +
        "where id_quiz_types = '2' and l.id_lesson = ?",
        [lessonId],
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
//GRAMMAR
router.post('/grammar/:lessonId', roleMiddleware(['admin']), (req, res) => {
    //to access data from FE we use body

    const lessonId = req.params.lessonId;
    const quizQuestion = req.body.quizQuestion;
    //add there lesson id and add it at create lesson page

    db.query(
        "insert into mydb.quizes(id_lesson, id_quiz_types) VALUES (?, 2)",
        [lessonId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error one', err})
                return;
            }
            db.query(
                "insert into mydb.quiz_questions(id_quizes, score, content) values ((Select Max(id_quizes) from quizes), 1, ?)",
                 [quizQuestion],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error two', err})
                        return;
                    }

                    res.send({status: 'ok'})
                })
        })
})


//only admin can add new quiz question
//WORD
router.post('/word/:lessonId', roleMiddleware(['admin']), (req, res) => {
    //to access data from FE we use body
    const quizQuestion = req.body.quizQuestion;
    const lessonId = req.params.lessonId;
    //add there lesson id and add it at create lesson page

    db.query(
        "insert into mydb.quizes(id_lesson, id_quiz_types) VALUES (?, 1)",
        [lessonId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error one', err})
                return;
            }
            db.query(
                "insert into mydb.quiz_questions(id_quizes, score, content) values ((Select Max(id_quizes) from quizes), 1, ?)",
                [quizQuestion],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error two', err})
                        return;
                    }

                    res.send({status: 'ok'})
                })
        })
})

module.exports = router;