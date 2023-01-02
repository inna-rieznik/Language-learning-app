import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import QuizGameBase from "../../vocabulary/quiz/QuizGameBase";
import * as React from "react";
import {reqInstance} from "../../../../utils/auth";
import {API_URL} from "../../../../utils/url";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";

const GrammarPartOfLesson = (props) => {
    let {lessonId} = useParams();
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    const [lessonObject, setLessonObject] = useState([]);
    const [quizQuestion, setQuizQuestion] = useState([]);
    const [listOfQuizQuestions, setListOfQuizQuestions] = useState([]);
    const [quizAnswer, setQuizAnswer] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        backgroundColor: 'white',
        boxShadow: 24,
        p: 4,
        borderRadius: '20px'
    };

    useEffect(() => {
        reqInstance.get(`${API_URL}/lessons/id/${lessonId}`).then((response) => {
            setLessonObject(response.data);
          //  console.log(response.data);
        });
    }, [])

/*    const addQuizQuestion = () => {
        reqInstance.post(`${API_URL}/quizQuestions/grammar/${lessonId}`, {
            quizQuestion: quizQuestion
        }).then((response) => {
        });
    }

    const addQuizAnswer = () => {
        reqInstance.post(`${API_URL}/quizQuestions/grammar/`, {
            quizAnswer: quizQuestion
        }).then((response) => {
        });
    }*/


    return (
        <div>
            <h2 style={{marginBottom: "20px", fontSize: '35px'}}>{lessonObject[0]?.title}</h2>
            <p style={{marginBottom: "20px", fontSize: '20px'}}>{lessonObject[0]?.intro_text}</p>
            <h2 style={{marginBottom: "20px", fontSize: '30px'}}>{lessonObject[0]?.grammar_rule_title}</h2>
            <p style={{marginBottom: "20px", fontSize: '20px'}}>{lessonObject[0]?.grammar_rule}</p>
            <h2 style={{marginBottom: "20px", fontSize: '30px'}}>Grammar exercises</h2>
            <h2 style={{marginBottom: "20px", fontSize: '20px'}}>Choose one correct answer out of the three offered.</h2>
            <QuizGameBase fetchDataEndpoint={`${API_URL}/quizQuestions/grammar/${lessonId}`}/>

{/*            <Button style={{marginBottom: 20}}
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

            </Modal>*/}

        </div>
    );
}

export default GrammarPartOfLesson;