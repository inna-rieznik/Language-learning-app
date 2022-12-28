import * as React from 'react';
import {Radio, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {useState} from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import axios from "axios";
import {useAuth} from "../../login/Auth";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {reqInstance} from "../../../utils/auth";


const CreateLesson = (props) => {

    const [title, setTitle] = useState("");
    const [introText, setIntroText] = useState("");
    const [grammarRuleTitle, setGrammarRuleTitle] = useState("");
    const [grammarRule, setGrammarRule] = useState("");
    const [quizQuestion, setQuizQuestion] = useState("");
    const [quizAnswer, setQuizAnswer] = useState("");
    const [user, setUser] = useState({})
    const {userId} = useAuth();

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();

    };

    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            console.log("user data", response.data[0]);
        });
    }, [userId]);





    const addLesson = () => {
        reqInstance.post('http://localhost:3011/lessons', {
            title: title,
            introText: introText,
            grammarRuleTitle: grammarRuleTitle,
            grammarRule: grammarRule,
        }).then((response) => {
            navigate('/');
            console.log(response.data);
        });
    };

    if (user.role === 'student') {
        window.location.href = '/'
        return null
    }

    //console.log("user role", localStorage.);

    return (
        <div style={{ width: "800px", margin: "20px auto 0 auto"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Home
                </Link>
                <Typography color="text.primary">Create New Lesson</Typography>
            </Breadcrumbs>
            <h1 style={{marginTop: "20px"}}>Create New Lesson</h1>
            <form
                sx={{
                    maxWidth: '100%',
                }}
                onSubmit={handleSubmit}
            >
                <h2>Title</h2>
                <TextField sx={{paddingBottom: 2}}
                           fullWidth id="addTitle"
                           onChange={(e) => {
                               setTitle(e.target.value);
                           }}/>

                <h2>Some intro text</h2>
                <TextField sx={{paddingBottom: 2}}
                           fullWidth id="addIntro"
                           multiline
                           maxRows={4}
                           onChange={(e) => {
                               setIntroText(e.target.value);
                           }}/>

                <h2>Grammar rule title</h2>
                <TextField sx={{paddingBottom: 2}}
                           fullWidth id="addRuleTitle"
                           onChange={(e) => {
                               setGrammarRuleTitle(e.target.value);
                           }}/>

                <h2>Grammar rule</h2>
                <TextField sx={{paddingBottom: 2}}
                           fullWidth id="addRule"
                           multiline
                           maxRows={4}
                           onChange={(e) => {
                               setGrammarRule(e.target.value);
                           }}/>

                <div style={{backgroundColor: 'white', padding: '20px'}}>
                    <h2>Quiz ... tady lze udelat stejny design jako u Relations v DAWISO, po kliknuti na + bude modalni okno </h2>
                    <h3>Quiz Question</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizQuestion(e.target.value);
                               }}/>
                    <h3>Option 1</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizAnswer(e.target.value);
                               }}/>
                    <label>
                        <input type="checkbox" style={{height: '20px', width: '20px'}}/>
                         is correct
                    </label>
                    <h3>Option 2</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizAnswer(e.target.value);
                               }}/>
                    <label>
                        <input type="checkbox" style={{height: '20px', width: '20px'}}/>
                        is correct
                    </label>
                    <h3>Option 3</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizAnswer(e.target.value);
                               }}/>
                    <label>
                        <input type="checkbox" style={{height: '20px', width: '20px'}}/>
                        is correct
                    </label>

                </div>



                <div style={{backgroundColor: 'white', padding: '20px', marginTop: '20px'}}>
                    <h2>Open Grammar Questions ... tady lze udelat stejny design jako u Relations v DAWISO, po kliknuti na + bude modalni okno </h2>
                    <h3>Question</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizQuestion(e.target.value);
                               }}/>
                    <h3>Correct Answer</h3>
                    <TextField sx={{paddingBottom: 2}}
                               fullWidth id="addRule"
                               multiline
                               maxRows={4}
                               onChange={(e) => {
                                   setQuizAnswer(e.target.value);
                               }}/>

                </div>




                <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}} type="submit"
                        variant="contained"
                        onClick={addLesson}
                        startIcon={<AddIcon/>}>Add Lesson</Button>
            </form>
        </div>
    );
}
export default CreateLesson;