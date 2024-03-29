import s from "../vocabulary/Vocabulary.module.css";
import * as React from 'react';
import Card from "./action/Card";
//import Button from "./action/Button";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {addWordToVocabularyActionCreator, updateNewWordTextActionCreator} from "../../redux/WordsReducer";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Vocabulary = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //function to add data from inputs to wordsData
    let newWordCz = React.createRef();
    let newWordEng = React.createRef();

    let addWordToVocabulary = () => {
        /* let word = newWordCz.current.value;
         let translate = newWordEng.current.value;
         addWordToVocabulary(word, translate);
         newWordCz.current.value = null;
         newWordEng.current.value = null;*/
        let action = addWordToVocabularyActionCreator()
        props.dispatch(action);
    };
    let updateNewWordText = () => {
        let word = newWordCz.current.value;
        let translation = newWordEng.current.value;
        let action = updateNewWordTextActionCreator(word, translation);
        props.dispatch(action);
    }

    return (
        <div className={s.vocabulary}>
            <h1>Vocabulary</h1>
            {/*
            <Button sx={{
                display: 'block',
                backgroundColor: "#FF777B",
                height: "50px",
                marginBottom: '20px'
            }}
                    variant="contained" href='create_lesson'>
                Add new word</Button>*/}

            {/*            <Button style={{backgroundColor: "#FF777B", width: "600px", height: "50px", marginBottom: 20}}
                    onClick={handleOpen} variant="contained" startIcon={<AddIcon/>}>add new
                word</Button>*/}

            <Button style={{backgroundColor: "#FF777B", width: "600px", height: "50px", marginBottom: '40px'}}
                    variant="contained" href='review_words'>Review words</Button>
            <Card to='my_words'>
                <div style={{padding: "20px"}}>MY WORDS</div>

            </Card>
            {/*  <Button variant="contained" href='modal_add_word'  startIcon={<AddIcon />} >add new word</Button>*/}

            {/*<Button  urlName='quiz' buttonAction='review words'/>
            <Button  urlName='modal_add_word' buttonAction='+add new word'/>*/}

        </div>
    );
}

export default Vocabulary;