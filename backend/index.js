const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: './.env'});
const app = express();

app.use(express.json()); // automatically parse every json object that was sent from FE
app.use(cors()); //cors send info between FE and BE

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
       // console.log("MYSQL connected");
    }
})




//ROUTERS
const registerRouter = require('./routes/Auth')
app.use("/auth", registerRouter);

/*const loginRouter = require('./routes/Login')
app.use("/login", loginRouter);*/

const lessonRouter = require('./routes/Lessons')
app.use("/lessons", lessonRouter);

const quizQuestionsRouter = require('./routes/QuizQuestions')
app.use("/quizQuestions", quizQuestionsRouter);

const quizAnswersRouter = require('./routes/QuizAnswers')
app.use("/quizAnswers", quizAnswersRouter);

const wordRouter = require('./routes/Words')
app.use("/words", wordRouter);

const userRouter = require('./routes/User')
app.use("/user", userRouter);

const scoreRouter = require('./routes/Score')
app.use("/score", scoreRouter);


app.get('/api/test', (req, res) => {
    res.send({
        test: 233
    })
})





app.listen(3011, (hostname) => {
    //console.log(`Running server on ${hostname}, port 3011`);
});

