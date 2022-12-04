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
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";


let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);

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
                <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}} type="submit"
                        variant="contained"
                        onClick={addLesson}
                        startIcon={<AddIcon/>}>Add Lesson</Button>
            </form>
        </div>
    );
}
export default CreateLesson;