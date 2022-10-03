import * as React from 'react';
import {TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {useState} from "react";
import Axios from "axios";


const CreateLesson = (props) => {

    const [title, setTitle] = useState("");
    const [introText, setIntroText] = useState("");
    const [grammarRuleTitle, setGrammarRuleTitle] = useState("");
    const [grammarRule, setGrammarRule] = useState("");



    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        event.target.reset();
    };

    const addLesson = () => {
        Axios.post('http://localhost:3011/lessons', {
            title: title,
            introText: introText,
            grammarRuleTitle: grammarRuleTitle,
            grammarRule: grammarRule
        }).then((response) => {
            console.log(response.data);
        });
    };

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
                        type="submit"
                        onClick={addLesson}
                        startIcon={<AddIcon/>}>Add Lesson</Button>
            </form>
        </div>
    );
}
export default CreateLesson;