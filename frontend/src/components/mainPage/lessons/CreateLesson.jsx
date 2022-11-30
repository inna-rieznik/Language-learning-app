import * as React from 'react';
import {TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {useState} from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import axios from "axios";
import {useAuth} from "../../login/Auth";


const CreateLesson = (props) => {

    const [title, setTitle] = useState("");
    const [introText, setIntroText] = useState("");
    const [grammarRuleTitle, setGrammarRuleTitle] = useState("");
    const [grammarRule, setGrammarRule] = useState("");
    const [user, setUser] = useState({})
    const {userId} = useAuth();

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();

    };

    useEffect(() => {
        axios.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
        });
    }, [userId])

    const addLesson = () => {
        Axios.post('http://localhost:3011/lessons', {
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

    return (
        <div>
            <h1>Create New Lesson</h1>
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
                <Button type="submit"
                        variant="contained"
                        onClick={addLesson}
                        startIcon={<AddIcon/>}>Add Lesson</Button>
            </form>
        </div>
    );
}
export default CreateLesson;