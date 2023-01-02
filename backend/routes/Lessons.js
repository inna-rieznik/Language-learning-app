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


//get list of LESSONS only for authorized user
/*router.get('/',  authMiddleware,(req, res) => {
    db.query('SELECT * FROM mydb.lessons',
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            console.log(result);
            res.send(result);
            console.log(req.userData);
        })

});*/

//get ALL lessons for admin
router.get('/all', roleMiddleware(['admin']), (req, res) => {

    try {
        db.query('select * from mydb.lessons',
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.send({status: 'error', err})
                    return;
                }
                res.send(result);
            })
    }catch (e){
        console.log(e)
    }

});

router.get('/forStudent', authMiddleware, (req, res) => {
    const userId = req.userData.id;
    db.query('select * from mydb.users_lessons join mydb.lessons on users_lessons.id_lesson = lessons.id_lesson where id_user = ?',
        [userId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
           // console.log(userId);
            res.send(result);
           // console.log(req.userData);
        })

});



//get one lesson only for authorized user '/lessons/id/1'
router.get('/id/:lessonId', authMiddleware, (req, res) => {
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



//only admin can add new lesson
router.post('/', roleMiddleware(['admin']), (req, res) => {
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


//only admin can add new lesson
router.put('/:lessonId', roleMiddleware(['admin']), (req, res) => {
    //to access data from FE we use body
    const title = req.body.title;
    const introText = req.body.introText;
    const grammarRuleTitle = req.body.grammarRuleTitle;
    const grammarRule = req.body.grammarRule;
    const lessonId = req.params.lessonId;

    db.query(
        "UPDATE mydb.lessons set title = ?, intro_text=?, grammar_rule_title=?, grammar_rule=? WHERE id_lesson = ?",
        [title, introText, grammarRuleTitle, grammarRule,lessonId],
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

router.put('/:lessonId/state', authMiddleware, (req, res) => {
    //to access data from FE we use body

    const lessonId = req.params.lessonId;
    const userId = req.userData.id;

    db.query(
        "UPDATE mydb.users_lessons set id_state = 3 WHERE id_lesson = ? and id_user = ?",
        [lessonId, userId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            //res.send({status: 'ok'})
            db.query(
                "SELECT * FROM mydb.users_lessons  WHERE id_lesson > ? and id_user = ? LIMIT 1",
                [lessonId, userId],
                (err, lessonResult) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }

                    if (result.length === 0) {
                        res.send({status: 'ok'})
                        return
                    }

                    db.query(
                        "UPDATE mydb.users_lessons  SET id_state = 1 WHERE id_lesson = ? and id_user = ?",
                        [lessonResult[0].id_lesson, userId],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send({status: 'error', err})
                                return;
                            }
                            res.send({status: 'ok'})
                        }
                    )
                }
            )
        }
    )
})


router.delete('/:lessonId', roleMiddleware(['admin']), (req, res) => {
    const lessonId = req.params.lessonId;

    db.query(
        "DELETE from mydb.users_lessons where id_lesson = ?",
        [lessonId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }


            db.query(
                "DELETE from mydb.lessons where id_lesson = ?",
                [lessonId],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }
                    res.send({status: 'Deleted successfully'})
                }
            )
        }
    )
})


module.exports = router;