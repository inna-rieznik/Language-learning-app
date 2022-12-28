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


//get list of words for authenticated user - student
router.get('/forStudent', authMiddleware, (req, res) => {
    const userId = req.userData.id;

    try {
        db.query("select * " +
            "from mydb.users_words " +
            "join mydb.words on users_words.id_word = words.id_word where id_user = ?",
            [userId],
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

//get list of words for authenticated user - student
router.get('/forStudent/:lessonId', authMiddleware, (req, res) => {
    const userId = req.userData.id;
    const lessonId = req.params.lessonId;

    try {
        db.query("select * from mydb.users_words join mydb.words on users_words.id_word = words.id_word where id_user = ? and id_lesson = ?",
            [userId, lessonId],
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


//show all words only for admin
router.get('/all', roleMiddleware(['admin']), (req, res) => {

    try {
        db.query('select * from mydb.words',
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


router.get('/all/:lessonId', roleMiddleware(['admin']), (req, res) => {
    const lessonId = req.params.lessonId;
    try {
        db.query('select * from mydb.words where id_lesson = ?',
            [lessonId],
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

//get random 6 words
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


//add word only for authenticated user student
router.post('/byStudent', authMiddleware, (req, res) => {
        //to access data from FE we use body
        try {
            const source = req.body.source;
            const target = req.body.target;
            const userId = req.userData.id;
            db.query(
                "INSERT INTO mydb.words (id_lesson, id_state, id_language, source, target) values(1,0,2,?,?)",
                [source, target],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }

                    const wordId = result.insertId;

                    db.query(
                        "INSERT INTO mydb.users_words (id_word, id_user, id_state, started_at) VALUES (?, ?, 0, null)",
                        [wordId, userId],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send({status: 'error', err})
                            }
                            res.send({status: 'ok'})
                        }
                    )
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
);



//add word for all users only for admin
router.post('/byAdmin', roleMiddleware(['admin']), (req, res) => {
        //to access data from FE we use body
        try {
            const source = req.body.source;
            const target = req.body.target;

            db.query(
                "INSERT INTO mydb.words (id_lesson, id_state, id_language, source, target) values(1,0,2,?,?)",
                [source, target],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }
                    const wordId = result.insertId;

                    db.query(
                        "INSERT INTO mydb.users_words (id_word, id_user, id_state, started_at) SELECT ?, id_user, 0, null FROM mydb.users",
                        [wordId],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send({status: 'error', err})
                            }
                            res.send({status: 'ok'})
                        }
                    )
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
)



router.delete('/:wordId', roleMiddleware(['admin']), (req, res) => {

    const wordId = req.params.wordId;

    db.query(
        "DELETE from mydb.users_words where id_word = ?",
        [wordId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }


            db.query(
                "DELETE from mydb.words where id_word = ?",
                [wordId],
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
