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
//get one lesson '/lessons/id/1'
router.get('/id/:lessonId', (req, res) => {
    const lessonId = req.params.lessonId;
    db.query(
        'SELECT * FROM mydb.lessons WHERE id_lesson = ?',
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

router.post('/', (req, res) => {
    //to access data from FE we use body
    const title = req.body.title;
    const introText = req.body.introText;
    const grammarRuleTitle = req.body.grammarRuleTitle;
    const grammarRule = req.body.grammarRule;

    db.query(
        "INSERT INTO mydb.lessons (title, intro_text, grammar_rule_title, grammar_rule) values(?,?,?,?)",
        [title, introText, grammarRuleTitle, grammarRule],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            res.send({status: 'ok'})
        }
    )
})

//make sure wi can export routers
module.exports = router;