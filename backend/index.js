const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: './.env'});
const app = express();




app.use(express.json()); // automatically parse every json object that was sent from FE
app.use(cors()); //cors send info between FE and BE

//
const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL connected");
    }
})

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    db.query(
        "INSERT INTO mydb.users (username,password,id_user,id_language,id_role, name, email, registered_at) values(?,?,6,1,1,?,?,NULL)",
        [email, password, username, email],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }
            res.send({status: 'ok'})
        })
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM mydb.users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err});
                return;
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({"message": "wrong email or password"});
            }

        })
})

/*app.post('/login', (req, res) => {


    res.json({
        success: true,
        token
    });


});*/

app.get('/api/test', (req, res) => {
    res.send({
        test: 233
    })
})

app.listen(3011, (hostname) => {
    console.log(`Running server on ${hostname}, port 3011`);
});

