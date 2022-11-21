const express = require('express');
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const {response} = require("express");
const {body, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const router = express.Router();

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const generateAccessToken = (id, role) => {
    const payload = {
        id, role
    }
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "1d"})
}

const generateRefreshToken = (id, role) => {
    const payload = {
        id, role
    }
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})
}

router.post('/register',
    [body('username', 'User can not be empty').notEmpty(),
        body('email', 'Email should be in format test@example.com').notEmpty().isEmail(),
        body('password', 'Password should be longer than 6 characters').isLength({min: 6})],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        try {
            const {username, password, email} = req.body;
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
                        res.send({"message": "User with the same username and email already exist"});
                        return;
                    }

                    //const hashedPassword = bcrypt.hashSync(password, 7);
                    db.query(
                        "INSERT INTO mydb.users (username, password,id_language,id_role, name, email, registered_at) values(?,?,1,2,?,?, CURRENT_TIMESTAMP())",
                        [username, password, username, email],
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
                                    /*res.send("User was successfully registered");*/
                                    db.query(
                                        "SELECT * FROM mydb.users JOIN roles r on users.id_role = r.id_role JOIN users_progress up on users.id_user = up.id_user WHERE email = ?",
                                        [email, password],
                                        async (err, result) => {
                                            if (result.length > 0) {
                                                //const passwordDB = result[0].password; //vytahnu hash
                                                //const validPassword = bcrypt.compareSync(password, hashedPassword);
                                                /* if (!validPassword) {
                                                     return res.status(400).json({
                                                         message: "Password verification failed",
                                                         passwordDB, validPassword, password, hashedPassword
                                                     });
                                                 }*/
                                                const token = generateAccessToken(result[0].id_user, result[0].role);
                                               // const refreshToken = generateRefreshToken(result[0].id_user, result[0].role);
                                               // res.cookie('refreshToken', refreshToken, {maxAge: 30*24*60*6*1000, httpOnly:true});
                                                return res.send({
                                                    message: 'Account is successfully registered!',
                                                    token,
                                                    user: result[0]
                                                });
                                                //return res.redirect('http://localhost:3000/');
                                            }

                                        }
                                    )
                                }
                            )
                        }
                    )
                }
            )
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"})
        }
    })


router.post('/login',
    [body('email', {"message": "Email can not be empty"}).notEmpty(),
        body('password', {"message": "Password can not be empty"}).notEmpty()],
    (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const {email, password} = req.body;

            db.query(
                "SELECT * FROM mydb.users JOIN roles r on users.id_role = r.id_role JOIN users_progress up on users.id_user = up.id_user WHERE email = ?",
                [email], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.send({status: 'error', err});
                        return;
                    }

                    if (result.length > 0) {
                        // const passwordDB = result[0].password;

                        //ERROR !!!!!!!!!!!!!
                        // comparation isn't CORRECT .... WHYYYYYYY
                        // const validPassword = bcrypt.compareSync(password, passwordDB);
                        //if(!validPassword){
                        //      return res.send({"message" : "Password verification failed", password,passwordDB, validPassword});
                        // }
                        const token = generateAccessToken(result[0].id_user, result[0].role);
                        return res.send({token, user: result[0]});
                        //return res.redirect('http://localhost:3000/')
                    }else{
                        return res.send({"message" : "User do not exist"})
                    }
                }
            )
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Login error"})
        }

    })


module.exports = router;