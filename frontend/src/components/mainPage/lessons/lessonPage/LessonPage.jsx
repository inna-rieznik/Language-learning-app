import {useParams} from "react-router-dom";
import s from "./LessonPage.module.css";
import * as React from 'react';
import {useEffect, useState} from "react";
import {useAuth} from "../../../login/Auth";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {IconButton, TextField} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import GrammarPartOfLesson from "./GrammarPartOfLesson";
import WordPartOfLesson from "./WordPartOfLesson";
import {reqInstance} from "../../../../utils/auth";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {API_URL} from "../../../../utils/url";


const LessonPage = (props) => {

    let {lessonId} = useParams();
    //const [lessonObject, setLessonObject] = useState([]);
    const {userId} = useAuth();
    const [user, setUser] = useState({})

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState("");
    const [introText, setIntroText] = useState("");
    const [grammarRuleTitle, setGrammarRuleTitle] = useState("");
    const [grammarRule, setGrammarRule] = useState("");

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


    const deleteLesson = () => {
        reqInstance.delete(`${API_URL}/lessons/${lessonId}`).then((response) => {
            window.location.href = '/'
        });
    };

    useEffect(() => {
        reqInstance.get(`${API_URL}/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            // console.log("user data", response.data[0]);
        });
    }, [userId]);

    const editLesson = () => {
        reqInstance.put(`${API_URL}/lessons/${lessonId}`, {
            title: title,
            introText: introText,
            grammarRuleTitle: grammarRuleTitle,
            grammarRule: grammarRule
        }).then((response) => {
        })
    }

    const editLessonState = () => {
        reqInstance.put(`${API_URL}/lessons/${lessonId}/state`, {
        }).then((response) => {
        });
    }

    return (
        <div className={s.content}>

            <div style={{width: "800px", margin: "20px auto 0 auto"}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">Lesson {lessonId}</Typography>
                </Breadcrumbs>

                <div className={s.parent}>
                    <div className={s.child}>
                        <h1 style={{marginTop: "20px", marginBottom: "20px"}}>Lesson {lessonId} </h1>
                    </div>
                    {(user.role === 'student') ? null :
                        <div className={s.child} style={{display: "flex", justifyContent: "flex-end"}}>
                            <IconButton onClick={handleOpen}
                                        style={{marginTop: "20px", marginBottom: "20px", alignItems: "right"}}>
                                <EditIcon style={{width: "30px", height: "auto", color: "green"}}/>
                            </IconButton>


                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h4" component="h1">
                                        Edit Lesson {lessonId}
                                    </Typography>
                                   {/* <Typography id="modal-modal-description" sx={{mt: 2}}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>*/}
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
                                    <Button variant="contained" onClick={() => {editLesson(); handleClose()}}>Edit</Button>
                                </Box>
                            </Modal>

                            <IconButton onClick={deleteLesson}
                                        style={{marginTop: "20px", marginBottom: "20px", alignItems: "right"}}>
                                <DeleteOutlinedIcon style={{width: "30px", height: "auto", color: "red"}}/>
                            </IconButton>
                        </div>
                    }

                </div>

                <GrammarPartOfLesson/>
                <WordPartOfLesson/>

                <Button style={{
                    backgroundColor: "#FF777B",
                    width: "400px",
                    height: "50px",
                    marginBottom: "20px",
                    marginTop: "30px"
                }} variant="contained" href='/' onClick={editLessonState}>Finish Lesson</Button>

            </div>


        </div>
    );
}
export default LessonPage;




