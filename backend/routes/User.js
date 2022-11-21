const express = require('express');
const mysql = require("mysql");
const authMiddleware = require("../middleware/authMidleware");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//it works return correct user in POSTMAN

router.get('/:userId', (req,res) => {

    const userId = req.params.userId;
    db.query(
        'SELECT * FROM mydb.users JOIN roles r on users.id_role = r.id_role JOIN users_progress up on users.id_user = up.id_user WHERE users.id_user = ?',
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
})

module.exports = router;