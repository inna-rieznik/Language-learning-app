/*
const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const {response} = require("express");

const  {body, validationResult} = require("express-validator");


const router = express.Router();


const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.post('/',
         [ body('username', 'User can not be empty').notEmpty(),
                  body( 'email', 'Email should be in format test@example.com').notEmpty().isEmail(),
                  body('password', 'Password should be longer than 6 characters').isLength({min:6})],
           (req, res) => {

    const errors = validationResult(req);
               if (!errors.isEmpty()) {
                   return res.status(400).json({ errors: errors.array() });
               }
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    //if exist user with the same credentials
    db.query(
        "SELECT * FROM mydb.users WHERE email = ? AND username = ?",
        [email, username],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err});
                return;
            }
            if (result.length > 0) {
                res.send({"message": "* User with the same username and email already exist"});
                return;
            }

            const hashedPassword = bcrypt.hashSync(password, 7);
            db.query(

                "INSERT INTO mydb.users (username, password,id_language,id_role, name, email, registered_at) values(?,?,1,2,?,?, CURRENT_TIMESTAMP())",
                [username, hashedPassword, username, email],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err})
                        return;
                    }
                    db.query(
                        "INSERT INTO mydb.users_progress (id_user,score, level, updated_at) values((select Max(id_user) from mydb.users),0,1,CURRENT_TIMESTAMP())",
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.send({status: 'error', err})
                                return;
                            }

                            res.send("User was successfully registered");
                           /!* db.query(
                                "SELECT * FROM mydb.users JOIN roles r on users.id_role = r.id_role JOIN users_progress up on users.id_user = up.id_user WHERE email = ?",
                                [email],
                                async (err, result) => {
                                    if (result.length > 0) {
                                        const passwordDB = result[0].password; //vytahnu hash
                                        const validPassword = bcrypt.compareSync(password, passwordDB);
                                        if (!validPassword) {
                                            return res.status(400).json({
                                                message: "Password verification failed",
                                                passwordDB, validPassword, password
                                            });
                                        }
                                        res.send(result);
                                    }

                                }
                            )*!/
                        }
                    )
                }
            )

        }
    )
})


module.exports = router;*/
