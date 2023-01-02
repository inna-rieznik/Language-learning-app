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
import {API_URL} from "../../../utils/url";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


const CreateLesson = (props) => {

    const [title, setTitle] = useState("");
    const [introText, setIntroText] = useState("");
    const [grammarRuleTitle, setGrammarRuleTitle] = useState("");
    const [grammarRule, setGrammarRule] = useState("");
    const [lessonId, setLessonId] = useState("");
    const [user, setUser] = useState({})
    const {userId} = useAuth();

    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();

    };

    useEffect(() => {
        reqInstance.get(`${API_URL}/user/${userId}`).then((response) => {
            setUser(response.data[0]);
        });
    }, [userId]);

    const addLesson = () => {
        reqInstance.post(`${API_URL}/lessons`, {
            title: title,
            introText: introText,
            grammarRuleTitle: grammarRuleTitle,
            grammarRule: grammarRule,
        }).then((response) => {
            navigate(`/`);
        });
    };

    if (user.role === 'student') {
        window.location.href = '/'
        return null
    }

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
            <form sx={{maxWidth: '100%'}} onSubmit={handleSubmit}
            >
                <h2>Title</h2>
                <TextField sx={{paddingBottom: 2}} fullWidth id="addTitle"
                           onChange={(e) => {
                               setTitle(e.target.value);
                           }}/>

                <h2>Some intro text</h2>
                <TextField sx={{paddingBottom: 2}} fullWidth id="addIntro" multiline maxRows={4}
                           onChange={(e) => {
                               setIntroText(e.target.value);
                           }}/>

                <h2>Grammar rule title</h2>
                <TextField sx={{paddingBottom: 2}} fullWidth id="addRuleTitle" onChange={(e) => {
                               setGrammarRuleTitle(e.target.value);
                           }}/>

                <h2>Grammar rule</h2>
                <TextField sx={{paddingBottom: 2}} fullWidth id="addRule" multiline maxRows={4}
                           onChange={(e) => {
                               setGrammarRule(e.target.value);
                           }}/>
{/*<div>
    <h2>Grammar exercises</h2>

    <Button style={{marginBottom: 20}}
            onClick={handleOpenAdd} variant="contained" startIcon={<AddIcon/>}>Add</Button>



                <Modal
                    open={openAdd}
                    onClose={handleCloseAdd}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h4" component="h1">
                            Add New Quiz
                        </Typography>

                        <h3 style={{marginTop: "15px"}}>Quiz Question</h3>
                        <TextField sx={{paddingBottom: 2}}
                                   fullWidth id="addRule"
                                   multiline
                                   maxRows={4}
                                   onChange={(e) => {
                                       setQuizQuestion(e.target.value);
                                   }}/>
                        <h3 style={{color: "green"}}>Correct Answer</h3>
                        <TextField sx={{paddingBottom: 2}}
                                   fullWidth id="addRule"
                                   multiline
                                   maxRows={1}
                                   onChange={(e) => {
                                       setQuizAnswer(e.target.value);
                                   }}/>
                        <h3 style={{color: "red"}}>Incorrect Answer</h3>
                        <TextField sx={{paddingBottom: 2}}
                                   fullWidth id="addRule"
                                   multiline
                                   maxRows={1}
                                   onChange={(e) => {
                                       setQuizAnswer(e.target.value);
                                   }}/>
                        <h3 style={{color: "red"}}>Incorrect Answer</h3>
                        <TextField sx={{paddingBottom: 2}}
                                   fullWidth id="addRule"
                                   multiline
                                   maxRows={1}
                                   onChange={(e) => {
                                       setQuizAnswer(e.target.value);
                                   }}/>

                        <Button variant="contained"
                                startIcon={<AddIcon/>}
                                onClick={() => {
                                    handleCloseAdd(); addQuizQuestion();
                                }}
                                style={{width: "500px", marginTop: "20px"}}
                        >add</Button>

                    </Box>

                </Modal>

</div>*/}




                <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}} type="submit"
                        variant="contained"
                        onClick={addLesson}
                        startIcon={<AddIcon/>}>Add Lesson</Button>
            </form>
        </div>
    );
}
export default CreateLesson;