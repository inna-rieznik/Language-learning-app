const express = require('express');
const mysql = require("mysql");
const {body, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config");

const router = express.Router();


const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
//test user
/*{
    "username": "Inna Rieznik Student",
    "email" : "rieznikinna@gmail.com",
    "password" : "123456qwerty"
}*/


const generateAccessToken = (id, role) =>{
    const payload = {
        id, role
    }
    return jwt.sign(payload, secret, {expiresIn: "24"})
}


const jwt = require('jsonwebtoken');



// /login
router.post('/',
    [body('email', 'Email can not be empty').notEmpty().isEmail(),
        body('password', 'Password can not be empty').notEmpty()],
    (req, res) => {
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
                    const passwordDB = result[0].password;

                    //ERROR !!!!!!!!!!!!!
                    // comparation isn't CORRECT .... WHYYYYYYY
                    const validPassword = bcrypt.compareSync(password, passwordDB);
                    if(!validPassword){
                        return res.status(400).json({message : "Password verification failed", password,passwordDB, validPassword});
                    }

                    const token = generateAccessToken(result[0].id_user, result[0].role);

                    return res.json({token});
                } else {
                    res.send({"message": "Wrong email or password"});
                }

            }
        )
    })


module.exports = router;