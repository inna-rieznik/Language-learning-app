//endpoint pro nacteni score usera

//po kliknuti na finish pridat score

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


//get ALL lessons for admin
router.post('/', authMiddleware, (req, res) => {
        const userId = req.userData.id;
        const points = req.body.points;

        try {
            db.query('select * from mydb.users_progress WHERE id_user = ?',
                [userId],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }

                    const dbScore = result[0].score;
                    let newScore = dbScore + points;
                    let newLevel = result[0].level;

                    if (newScore >= 100) {
                        newLevel = newLevel + Math.floor(newScore / 100)
                        newScore = newScore % 100;
                    }


                    db.query('UPDATE mydb.users_progress SET score = ?, level = ?, updated_at = CURRENT_TIMESTAMP() WHERE id_user = ?',
                        [newScore, newLevel, userId],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send({status: 'error', err})
                                return;
                            }

                            res.send({
                                status: 'ok',
                                data: {
                                    newLevel,
                                    newScore
                                }
                            });
                        }
                    )
                }
            )
        } catch
            (e) {
            console.log(e)
        }

    }
);

module.exports = router;