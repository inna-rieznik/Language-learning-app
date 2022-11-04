const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const jwt = require('jsonwebtoken');



// /login
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM mydb.users JOIN roles r on users.id_role = r.id_role JOIN users_progress up on users.id_user = up.id_user WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err});
                return;
            }
            if (result.length > 0) {
                //create JWT
                const accessToken = jwt.sign({"email" : email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60s'});
                const refreshToken = jwt.sign({"email" : email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
                res.send(result);
                /*res.json(accessToken);*/
            }else if(!email || !password){
                res.send({"message": "Email and password are required"});
            } else {
                res.send({"message": "Wrong email or password"});
            }

        }
    )
})


module.exports = router;