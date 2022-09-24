const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();


app.use(express.json()); // automatically parse every json object that was sent from FE
app.use(cors()); //cors send info between FE and BE

const db = mysql.createConnection({
    user: "myapp",
    host: "localhost",
    password: "myapp1234",
    database: "mydb"
});
app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query(
        "INSERT INTO mydb.users (username,password,id_user,id_language,id_role, name, email, registered_at) values(?,?,2,1,1,'Inna Rieznik',?,NULL)",
        [username, password, email],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({status: 'error', err})
                return;
            }

            res.send({status: 'ok'})
        })
})

app.get('/api/test', (req, res) => {
    res.send({
        test: 233
    })
})

app.listen(3011, (hostname) => {
    console.log(`Running server on ${hostname}, port 3011`);
});

